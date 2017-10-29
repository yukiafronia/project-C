var gRegexpUrl = '((https?|ftp):\\/\\/(([\\w-]+\\.){1,}[a-z]+|(\\d+\\.){3}\\d+)(:\\d+)?(\\/[-.!~*\\\'()\\w;\\/?:@&=+$,%#]+|\\/)?)';
var gRegexpImgUrl = '((https?|ftp):\\/\\/(([\\w-]+\\.){1,}[a-zA-Z]+|(\\d+\\.){3}\\d+)(:\\d+)?(\\/[-.!~*\\\'()\\w;\\/?:@&=+$,%#]+|\\/)?(jpg|jpeg|gif|png)+)';
var gRegexpTell = '^[0-9]{2,5}-?[0-9]{1,5}-?[0-9]{3,5}$';
var gRegexpNumber = '^-?[0-9]+(\.[0-9]+)?$';
var gRegexpNonNumber = '[^0-9\-\.]';

var mailLabelPattern = '[0-9a-z](([0-9a-z-]+)?[0-9a-z])?';
var gRegexpMailAddr = '^[a-z0-9\\-_.]+' + '@' + '(' + mailLabelPattern + '[.])+' + mailLabelPattern + '$';

var gRegxpColor = '#[a-fA-F0-9]{6}$'
// error
function getFuncName(aCallee){
  return aCallee.toString().split('{')[0];
}

function getThrowStr(aErr, aCallee){
  return getFuncName(aCallee)+" => " + aErr;
}

function errorMsg(errorMsgStr, aErr, aCallee){
  try {
    if (errorMsgStr) {
      var msg = errorMsgStr;
      msg = msg.replace('##__FUNC__##', getFuncName(aCallee));
      msg = msg.replace('##__ERROR__##', (aErr.description?aErr.description:aErr));

      alert(msg);
    }
  } catch (e){
    alert(arguments.callee.toString().split('{')[0] + ':' + (e.description?e.description:e));
  }
}


// ユニークなIDを返す。
function getUniqId(){
  var keyHeader = 'haihaiApi';
  var createId = '';

  try {
    do {
      createId = keyHeader + (new Date().getTime());
    } while ($('#'+createId).length);

  } catch (e){
    alert(arguments.callee.toString().split('{')[0] + ':' + (e.description?e.description:e));
  }

  return createId;
}


function htmlspecialchars(aStr){
  return aStr.replace(/&/g,  '&amp;')
             .replace(/"/g,  '&quot;')
             .replace(/'/g,  '&#039;')
             .replace(/</g,  '&lt;')
             .replace(/>/g,  '&gt;');
}



function htmlspecialchars_decode(aStr){
  return aStr.replace(/&gt;/g   ,  '>')
             .replace(/&lt;/g   ,  '<')
             .replace(/&#039;/g ,  '\'')
             .replace(/&quot;/g ,  '"')
             .replace(/&amp;/g  ,  '&');
}


function space2nbsp(aStr){
  return aStr.replace(/[ ]{1}/g   ,  '&nbsp;');
}


// htmlタグの属性を取得する。
// attr data
function getHtmlAttr(aHtml, aAttr){
  var attrStr = "";
  var chk= new RegExp('\\s+'+aAttr+'\\s*=\\s*("[^"]*"|\'[^\']*\'|[^(>|\\s)]*)',"igm");
  var attrArray = aHtml.match(chk);
  if (attrArray && attrArray.length > 0) {
    attrStr = attrArray[0];
  }
  return attrStr;
}

// 属性の値を取得する。
function getAttrVal(aAttr){
  var attrVal = '';
  var attrExp = new RegExp("=");

  if (attrExp.test(aAttr)) {
    aAttr.match(attrExp);
    var attrVal = RegExp.rightContext;

    if (attrVal) {
      attrVal = $.trim(attrVal);
      var search = new RegExp('^(\'.*\'|\".*\")$',"gm");
      var attrArray = attrVal.match(search);
      if (attrArray && attrArray.length > 0) {
        attrVal = attrVal.substring(1, attrVal.length - 1);
      }
    }
  }

  return attrVal;
}

// CSSの値を取得する。
function getCssVal(aHtml, aCss){
  var style = getAttrVal(getHtmlAttr(aHtml, 'style'));

  var styleArray = style.split(';');
  var cssArray = Array();
  var cssVal = '';

  aCss = $.trim(aCss.toLowerCase());

  for (var i=0;i<styleArray.length;i++) {
    cssArray = styleArray[i].split(':');
    if (cssArray.length == 2) {
      if ($.trim(cssArray[0].toLowerCase()) == aCss) {
        cssVal = $.trim(cssArray[1]);
        break;
      }
    }
  }

  return cssVal;
}

// HTMLデコード
function htmlDecode(aHtml, aQuoteTarget){
  if (aQuoteTarget == undefined) {
    aQuoteTarget = false;
  }

  var htmlVal = aHtml;

  if (aQuoteTarget) {
    var replaceKey = {
                            '\\^'          : '^en;'    ,
                            '\\<'          : '^lt;'    ,
                            '\\>'          : '^gt;'    ,
                            '"'            : '^quot;'  ,
                            '\''           : '^#039;'  ,
                            '&'            : '^amp;'   ,
                            '\\^amp;lt;'   : '<'       ,
                            '\\^amp;gt;'   : '>'       ,
                            '\\^amp;quot;' : '"'       ,
                            '\\^amp;#039;' : '\''      ,
                            '\\^amp;amp;'  : '&'
                          };
  } else {
    var replaceKey = {
                            '\\^'          : '^en;'    ,
                            '\\<'          : '^lt;'    ,
                            '\\>'          : '^gt;'    ,
                            '"'            : '^quot;'  ,
                            '&'            : '^amp;'   ,
                            '\\^amp;lt;'   : '<'       ,
                            '\\^amp;gt;'   : '>'       ,
                            '\\^amp;quot;' : '"'       ,
                            '\\^amp;amp;'  : '&'
                          };
  }

  $.each(replaceKey, function(key, val) {
    replaceKey = new RegExp(key, "igm");
    htmlVal = htmlVal.replace(replaceKey, val);
  });
  return htmlVal;
}


// HTMLエンコード
function htmlEncode(aHtml, aQuoteTarget){
  if (aQuoteTarget == undefined) {
    aQuoteTarget = false;
  }

  var htmlVal = aHtml;

  if (aQuoteTarget) {
    var replaceKey = {
                            '&'         : '&amp;' ,
                            '\\<'       : '&lt;'  ,
                            '\\>'       : '&gt;'  ,
                            '"'         : '&quot;',
                            '\''        : '&#039;',
                            '\\^lt;'    : '<'     ,
                            '\\^gt;'    : '>'     ,
                            '\\^quot;'  : '"'     ,
                            '\\^#039;'  : '\''    ,
                            '\\^amp;'   : '&'     ,
                            '\\^en;'    : '^'
                          };
  } else {
    var replaceKey = {
                            '&'         : '&amp;' ,
                            '\\<'       : '&lt;'  ,
                            '\\>'       : '&gt;'  ,
                            '"'         : '&quot;',
                            '\\^lt;'    : '<'     ,
                            '\\^gt;'    : '>'     ,
                            '\\^quot;'  : '"'     ,
                            '\\^amp;'   : '&'     ,
                            '\\^en;'    : '^'
                          };
  }


  $.each(replaceKey, function(key, val) {
    replaceKey = new RegExp(key, "igm");
    htmlVal = htmlVal.replace(replaceKey, val);
  });

  return htmlVal;
}


// 正規表現でのエスケープを行う
function pregQuote(aStr){
  var quoteStr = ".\\+*?[^]$(){}=!<>|:-";
  var data = "";

  for(var i=0;i<aStr.length;i++){
    tmpStr = aStr.charAt(i);
    if (quoteStr.lastIndexOf(tmpStr) != -1) {
      data += "\\"+tmpStr;
    } else {
      data += tmpStr;
    }
  }

  return data;
}




/*********************************************
 文字列を{}でエスケープする関数
*********************************************/
// エスケープの開始
function escapeStart(aStr){
  var replaceKeyArray = [ '{' ,'}' ];

  return escapeAdd(aStr, replaceKeyArray);
}

// エスケープする文字列を追加
function escapeAdd(aStr, aKeyArray){
  var data = aStr;

  if (aKeyArray == undefined) {
    aKeyArray = Array();
  }

  for (var i=0;i<aKeyArray.length;i++) {
    replaceKey = new RegExp(pregQuote(aKeyArray[i]), "igm");
    data = data.replace(replaceKey, '{'+aKeyArray[i]+'}');
  }

  return data;
}


// エスケープを外す
function escapeDelete(aStr, aKeyArray){
  var data = aStr;

  if (aKeyArray == undefined) {
    aKeyArray = Array();
  }

  for (var i=0;i<aKeyArray.length;i++) {
    replaceKey = new RegExp('\\{'+pregQuote(aKeyArray[i])+'\\}', "igm");
    data = data.replace(replaceKey, aKeyArray[i]);
  }

  return data;
}
// エスケープの終了
function escapeEnd(aStr){
  var replaceKeyArray = Array('}','{')

  return escapeDelete(aStr, replaceKeyArray);
}


// sleep
var objSleepExec = Array();
var objSleepExecIndex = 0;
var objSleepExecKey = 'SleepExecKey';
function sleepExec(aFunction, aMsec){
  var index = ++objSleepExecIndex;
  var key = objSleepExecKey + index;
  objSleepExec[key] = aFunction;
  setTimeout("_sleepExec("+index+")", aMsec);
}

function _sleepExec(aIndex){
  var key = objSleepExecKey + aIndex;

  if (objSleepExec[key]) {
    objSleepExec[key]();
    delete objSleepExec[key];
  }
}



// 最前面に表示するためのzindexの管理
var haihaiPluginZindex = 100;
function getZindex(aZindex){
  var zindex = 0;

  if (aZindex != undefined) {
    zindex = aZindex;
  }

  if (zindex < haihaiPluginZindex) {
    zindex = ++haihaiPluginZindex;
  }

  return zindex;
}



// 改行させるため<wbr>タグを埋め込む
function setWbr(aStr) {
  var ret = '';

  //HTMLタグエンコード
  var entityArray = Array();

  entityArray[entityArray.length] = '&amp;';
  entityArray[entityArray.length] = '&amp;';
  entityArray[entityArray.length] = '&lt;';
  entityArray[entityArray.length] = '&gt;';
  entityArray[entityArray.length] = '&apos;';
  entityArray[entityArray.length] = '&quot;';
  entityArray[entityArray.length] = '&#039;';
  entityArray[entityArray.length] = '&nbsp;';
  entityArray[entityArray.length] = '&#8203;';

  for(var i=0;i<aStr.length;i++){
      tmpStr = aStr.charAt(i);

      var nextLoop = false;

      if (tmpStr=='&'){
        //特殊文字の可能性あり
        var esc;
        for(var j=0;j<entityArray.length;j++){
          esc = entityArray[j];
          if (aStr.substr(i, esc.length) == esc) {
            ret += esc;
            i += esc.length - 1;
            nextLoop = true;
            break;
          }
        }
      } else if (tmpStr=='<') {
        // タグ
        for(var j = i; j < aStr.length; j++) {
          if (aStr.charAt(j) == '>') {
            ret += aStr.substr(i, (j - i) + 1);
            i = j;
            nextLoop = true;
            break;
          }
        }
      }

      if (nextLoop) {
        continue;
      }

      tmpStr = tmpStr.replace(/(\r\n|\r|\n)/gm,'<br/>');

      if (tmpStr == '<br/>') {
        ret += tmpStr;
      } else {
        if (isEdge() || isChrome() || isFirefox() || (isIe() && getIeVersion() == 11)) {
          ret += '<wbr>&#8203;' + tmpStr;
        } else {
          ret += '<wbr>' + tmpStr;
        }
      }

    }


    return ret;
}

function checkDateRange(aFromYear, aFromMonth, aFromDay, aToYear, aToMonth, aToDay) {
  var isDate = false;

  if (checkDate(aFromYear, aFromMonth, aFromDay)
   && checkDate(aToYear, aToMonth, aToDay)){
    var fromDateObj = new Date((aFromYear * 1), (aFromMonth * 1) - 1, (aFromDay * 1));
    var toDateObj = new Date((aToYear * 1), (aToMonth * 1) - 1, (aToDay * 1));

    if (fromDateObj <= toDateObj) {
      isDate = true;
    }
  }

  return isDate;
}

function checkDate(aYear, aMonth, aDay) {
  var isDate = false;

  if (checkYear(aYear) && checkMonth(aMonth) && checkDay(aDay)){
    aYear = (aYear * 1);
    aMonth = (aMonth * 1) - 1;
    aDay = (aDay * 1);

    var dateObj = new Date(aYear, aMonth, aDay);
    if(!isNaN(dateObj)
     && dateObj.getFullYear() == aYear
     && dateObj.getMonth() == aMonth
     && dateObj.getDate() == aDay){
      isDate = true;
    }
 }

  return isDate;
}

function checkDateMD(aMonth, aDay) {
  return checkDate(1980, aMonth, aDay);
}

function checkYear(aYear) {
  aYear = (aYear * 1);
  return (aYear > 0);
}

function checkMonth(aMonth) {
  aMonth = (aMonth * 1);
  return (aMonth >= 1 && aMonth <= 12);
}

function checkDay(aDay) {
  aDay = (aDay * 1);
  return (aDay >= 1 && aDay <= 31);
}


function getDateArray(aAddYear, aAddMonth, aAddDay) {
  var retArray = Array();
  var dateObj = new Date();

  var nowYear = dateObj.getFullYear();
  var nowMonth = dateObj.getMonth();
  var nowDay = dateObj.getDate();

  if (aAddYear == undefined) {
    aAddYear = 0;
  }

  if (aAddMonth == undefined) {
    aAddMonth = 0;
  }

  if (aAddDay == undefined) {
    aAddDay = 0;
  }

  nowYear += aAddYear;
  nowMonth += aAddMonth;

  var lastDay = getLastDay(nowYear, nowMonth + 1); // 月末を取得
  dateObj = new Date(nowYear, nowMonth, (nowDay>lastDay?lastDay:nowDay) + aAddDay);

  retArray['year'] = dateObj.getFullYear();
  retArray['month'] = dateObj.getMonth() + 1;
  retArray['day'] = dateObj.getDate();

// debugPrint(retArray['year']+"-"+retArray['month']+"-"+retArray['day']);

  return retArray;
}


/**
 * 年月を指定して月末日を求める関数
 * year 年
 * month 月
 */
function getLastDay(year, month) {
  var dateObj = new Date(year, month, 0);

  return dateObj.getDate();
}




// debug print
function debugPrint(aStr, isAppend){
  var debugId = 'haihaiJsDebug';

  var target = $('body');

  var dateObj = new Date();
  var yy = dateObj.getYear();
  var mm = dateObj.getMonth() + 1;
  var dd = dateObj.getDate();
  var hh = dateObj.getHours();
  var mi = dateObj.getMinutes();
  var ss = dateObj.getSeconds();


  if (yy < 2000) { yy += 1900; }
  if (mm < 10) { mm = "0" + mm; }
  if (dd < 10) { dd = "0" + dd; }
  if (hh < 10) { hh = "0" + hh; }
  if (mi < 10) { mi = "0" + mi; }
  if (ss < 10) { ss = "0" + ss; }

  var debugData = 'debug:' + yy + '/' + mm + '/' + dd + ' ' + hh + ':' + mi + ':' + ss + '\r\n-------------------------------------\r\n'+aStr;
  if ($('#'+debugId).length > 0) {
    if (isAppend) {
      debugData += '\r\n========================================\r\n'+$('#'+debugId+'>textarea').text();
    }

    $('#'+debugId+'>textarea').text(debugData);
  } else {
    $('<div>').attr('id', debugId)
              .append($('<div>').addClass('debugTitle')
                                .css({
                                         'width'      :'300px',
                                         'height'     :'15px',
                                         'border'     :'1px solid',
                                         'text-align' :'right',
                                         'padding'    :'0px',
                                         'margin'     :'0px'
                                        })
                                .append($('<a>').text('[閉じる]')
                                                .attr('href', 'javascript:void(0);')
                                                .click(function(){
                                                         target.find('#'+debugId).remove();
                                                       })
                                       )
                     )
              .append($('<textarea>').text(debugData)
                                     .css({'width':'300px','height':'300px'})
                     )
              .css({
                         'z-index'     : getZindex() ,
                         'position' :'absolute',
                         'background-color'  :'#FF9900',
                         'padding'  :'0px',
                         'margin'   :'0px'
                       })
              .appendTo(target);

    if ($.fn.bgiframe) {
      $('#'+debugId).bgiframe();
    }

    if ( $.fn.draggable) {
      $('#'+debugId).draggable({
        handle: '.debugTitle'
      });
    }

    var formWidth = target.find('#'+debugId).width();
    var formHeight = target.find('#'+debugId).height();

    var left = Math.floor(($(window).width() - formWidth) / 2);
    var top  = Math.floor(($(window).height() - formHeight) / 2);

    left += $(window).scrollLeft();
    top  += $(window).scrollTop();

    if (left < 0) {
      left = 0;
    }

    if (top < 0) {
      top = 0;
    }

    $('#'+debugId).css({
                         'left'     :left + 'px',
                         'top'      :top + 'px'
                       });
  }


}

//色の設定が正しければ大文字を返す
//間違っていれば空白を返す（エラー判定用）
function chkHtmlColor(aColor){
  if(aColor){
    if(aColor.substr(0,1) != "#"){
      aColor = "#" + aColor;
  }
  regexp = new RegExp(gRegxpColor, "i");
  if (!aColor.match(regexp)) {
    aColor = "";
  }
  }
  return aColor;
}

// 文字を指定された数分返す（「0」埋めなどに使用）
function rightStr( str, len ){
  return str.substr( str.length - len, len );
}

// 数値の比較を行う
function chkNumberRange(aFrom, aTo){
  var isNum = false;

  var fromNum = Number(aFrom);
  var toNum   = Number(aTo);

  if (fromNum <= toNum) {
    isNum = true;
  }
  return isNum;

}
