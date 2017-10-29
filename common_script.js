function openWindow(windowName, url, width, height){
  win=window.open(url,windowName,'width='+width+',height='+height+',left=0,top=0,scrollbars=yes,status=no,toolbar=no,menubar=no,directories=no,personalbar=no,resizable=yes');
  win.focus();
}


function showHideElement(elementid){
  displaystatus = document.getElementById(elementid).style.display;
  if(displaystatus == 'none'){
    displaystatus = "";
  } else {
    displaystatus = "none";
  }
}


function showElement(elementid){
  document.getElementById(elementid).style.display = "";
}

function hideElement(elementid){
  document.getElementById(elementid).style.display = "none";
}

function checkAllCheckBox(triggerId, formId, checkBoxName) {
  checkStatus = document.getElementById(triggerId).checked;
  checkAll(formId, checkBoxName, checkStatus);
}


function isChecked(formId, checkboxId) {
  checkbox = document.getElementById(formId).elements[checkboxId];

  if(!checkbox){
    return false;
  }

  count = 0;

  for(i=0; i< checkbox.length; i++){
    if(checkbox[i].checked==true){
      count++;
      break;
    }
  }

  if(count > 0 || checkbox.checked){
    return true;
  } else {
    return false;
  }

}


function dellAllCheckBox(formId, actionId, checkboxId, actionName, msg) {
  if(isChecked(formId, checkboxId)){
    buttonDeSubmit(formId, actionId , actionName, msg);
  } else {
//  alert('何も選択されていません');
  }
}


function forwardWithConfirm(msg, url){
  if(window.confirm(msg)){
    location.href = url;
  }
}



function buttonDeSubmitForTarget ( targetValue, formId, actionId, actionName, msg ) {
    document.getElementById(formId).target = targetValue;
    buttonDeSubmit(formId, actionId, actionName, msg);
}



function buttonDeSubmit(formId, actionId, actionName, msg){
   if(msg){
     if(window.confirm(msg)){
       document.getElementById(actionId).value=actionName;
       document.getElementById(formId).submit();
     }
   } else {
     document.getElementById(formId).method = "post";
     document.getElementById(actionId).value=actionName;
     document.getElementById(formId).submit();

   }
}


function switchFormAblable(checkId, targetFormId){

   targetForm = document.getElementById(targetFormId);

   if(document.getElementById(checkId).checked==true){
     targetForm.disabled = false;
     targetForm.style.background='#FFFFFF';
   }else{
     targetForm.disabled = true;
     targetForm.style.background='#DDDDDD';
   }
}


function checkAll(formId , checkBoxName, status) {
  checkbox = document.getElementById(formId).elements[checkBoxName];

  if(! checkbox){ // no checkbox
    return;
  }

  if(checkbox.value){ // case when only one checkbox exists
    if (checkbox.disabled == false){
        checkbox.checked = status;
    }

  } else {
    for(i=0; i< checkbox.length; i++ ) {
      if (checkbox[i].disabled == false){
        checkbox[i].checked = status;
      }
    }
  }
}

var isDialogOpen = false;
function openJqUiDialogGet(id, url, title, dialogWidth, dialogHeight, openEvents, closeEvents) {

  if (!isDialogOpen) {
    isDialogOpen = true;

    $('#'+id).remove();
    $("body").after("<div id='"+id+"'></div>");

    $('#'+id).dialog({
            height: dialogHeight,
            width: dialogWidth,
            draggable: true,
            bgiframe: true,
            resizable: true,
            modal: true,
            overlay:{
              opacity: 0.75,
              background: '#000000'
            },
            title: title,
            open: function(){
              $(this).html(
          ''
        + '<iframe src="'+url+'" height='+(dialogHeight-85)+' width=100% marginheight=0 marginwidth=0 frameborder=0 allowtransparency=true ></iframe>'
        + '<center>'
        + '<a  href="#" onclick="$(\'#'+id+'\').dialog(\'close\');return false;" class="nega_75" style="margin-top:5px;" >閉じる</a>'
        + '</center>'
              );
              if (openEvents) openEvents();
            },
            close: function(){
              if (closeEvents) closeEvents();

              isDialogOpen = false;
            },
            dialogClass:'flora'
          });

    isDialogOpen = false;
  }

}

function openJqUiDialogPost(id, paramObj, title, dialogWidth, dialogHeight, openEvents, closeEvents) {
  var htmlData = '';

  if (!isDialogOpen) {
    isDialogOpen = true;

    $('body').css("cursor","wait");

    jQuery.post("index.php", paramObj, function(htmlData){
      $('#'+id).remove();
      $('body').after("<div id='"+id+"'></div>");
      var dialog = $('#'+id).dialog({
              height: dialogHeight,
              width: dialogWidth,
              draggable: false,
              bgiframe: true,
              resizable: false,
              modal: true,
              overlay:{
                background : '#000000' ,
                opacity : 0.75
              },
              title: title,
              open: function(){
                $(this).html(
                    ''
                  + htmlData
                );
                if (openEvents) openEvents();
              },
              close: function(){
                if (closeEvents) closeEvents();

                isDialogOpen = false;
              },
              dialogClass:'flora'
            });

      $('body').css("cursor","auto");
    });
  }

}

function openCkEditorPreview(view_type, mode, is_template, gid, spid, subject, body) {
  var sendAreaElm = document.getElementById("send_area");
  var send_area = 0;
  if (sendAreaElm) {
    send_area = $.trim($('#send_area').val());
  }

  if (send_area == 0) {
    if (view_type == 'PREVIEW_PC') {
      openMailPreview('PreviewHtmlMailPc', '0', mode, is_template, gid, spid, subject, body, 'HTMLメール（PC）', 805, 700, true);
    } else {
      openMailPreview('PreviewHtmlMailSmaho', '0', mode, is_template, gid, spid, subject, body, 'HTMLメール（スマホ）', 365, 700, true);
    }
  } else {
    if (view_type == 'PREVIEW_PC') {
      openViewMulti(send_area, subject, body, 1, false, spid, true);
    } else {
      openViewMulti(send_area, subject, body, 1, true, spid, true);
    }
  }
}

function openMailPreview(action, preview_type, mode, is_template, gid, spid, subject, body, title, dialogWidth, dialogHeight, isHtmlEditor, isSmaho, header_content, footer_content) {
  var paramObj = new Object();
  var openEvents = null;
  var closeEvents = null;
  var show_header = false;
  var show_footer = false;

  if (isDialogOpen) {
    return;
  }

  dialogWidth += 5;
  dialogHeight += 5;

  var headerElm = document.getElementById("show_header");
  var footerElm = document.getElementById("show_footer");
  if (headerElm) {
    if (spid > 0) {
      show_header = $("#show_header").is(':checked');
    } else {
      show_header = $("#show_header").val();
    }
  }
  if (footerElm) {
    if (spid > 0) {
      show_footer = $("#show_footer").is(':checked');
    } else {
      show_footer = $("#show_footer").val();
    }
  }

  paramObj.action = action;
  paramObj.preview_type = preview_type;
  paramObj.mode = mode;
  paramObj.gid = gid;
  paramObj.spid = spid;
  paramObj.is_html_editor = isHtmlEditor;
  paramObj.is_template = is_template;
  paramObj.subject = subject;
  paramObj.body = body;
  paramObj.show_header = show_header;
  paramObj.show_footer = show_footer;
  paramObj.header_content = header_content;
  paramObj.footer_content = footer_content;
  var isSubject = document.getElementById('is_subject');
  if (isSubject && isSubject.value == 0) {
    paramObj.hide_subject = 1;
  }

  switch (action) {
    case 'PreviewTextMailMobile':
    case 'PreviewHtmlMailPc':
    case 'PreviewHtmlMailSmaho':
      openEvents = function (){
        var iframe = document.createElement('IFRAME');

        switch (action) {
          case 'PreviewTextMailMobile':
            //iframe.width = '165px';
            //iframe.height = '380px';
            iframe.width = '100%';
            iframe.height = '100%';
            break;
          case 'PreviewHtmlMailPc':

            if(isHtmlEditor == undefined){
              iframe.width = '665px';
              iframe.height = '380px';
            }else{
              iframe.width = '775px';
              iframe.height = '590px';
            }
            break;

          case 'PreviewHtmlMailSmaho':
            if(isHtmlEditor == undefined){
              iframe.width = '335px';
              iframe.height = '380px';
            }else{
              iframe.width = '335px';
              iframe.height = '590px';
            }
            break;
        }

        iframe.frameBorder = 0;
        iframe.marginheight = 0;
        iframe.marginwidth = 0;
        iframe.vspace = 0;

        var iframeData = '';
        
        if (action == 'PreviewTextMailMobile') {
          iframe.src = '/previewTextMailMobile.html?name='+name;

          $("#previewBody").after(iframe);

        } else {
        
          if(action == 'PreviewHtmlMailSmaho'){
            iframeData += '<p>';
            iframeData += ' <style type="text/css"><!--';
            iframeData += '   body {';
            //iframeData += '     white-space : nowrap;';
            iframeData += '     margin      : 0px;';
            iframeData += '     padding     : 0px;';
            iframeData += '     overflow-x  : visible;';
            iframeData += '     overflow-y  : scroll;';
            iframeData += '   }';
            iframeData += ' //--></style>';
            iframeData += '</p>';
          }
          
          iframeData += $('#previewBodyData').val();
            
          $("#previewBody").after(iframe);

          //if (frames.length > 0) {
            //var doc = frames[frames.length - 1].document;
            var doc = iframe.contentWindow.document;

            doc.open();
            doc.write(iframeData);
            doc.close();
          //}
        }


      };

      break;
  }

  openJqUiDialogPost('previewDialog', paramObj, title, dialogWidth, dialogHeight, openEvents, closeEvents);

}


function alertDialogSubmit(title, msg, dialogWidth, dialogHeight, formId, actionId, actionName) {
  var id = 'alertDialog';

  if (!isDialogOpen) {
    isDialogOpen = true;

    $('body').css("cursor","wait");

      var exeFlg = true

    $('#'+id).remove();
    $('body').after("<div id='"+id+"'></div>");
    var dialog = $('#'+id).dialog({
            height: dialogHeight,
            width: dialogWidth,
            draggable: false,
            bgiframe: true,
            resizable: false,
            modal: true,
            overlay:{
              background : '#000000' ,
              opacity : 0.75
            },
            title: title,
            open: function(){
              $(this).html(msg);
            },
            close: function(){
              isDialogOpen = false;
            },
            buttons:{
              'OK': function(){
                if (exeFlg) {
                  exeFlg = false;
                  parent.$('#'+actionId).value=actionName;
                  parent.$('#'+formId).submit();
                }
              },
              'キャンセル': function(){
                $(this).dialog('close');
              }
            },
            dialogClass:'alert'
          });

    $('body').css("cursor","auto");
  }
}

function alertDialogForward(title, msg, dialogWidth, dialogHeight, url) {
  var id = 'alertDialog';

  if (!isDialogOpen) {
    isDialogOpen = true;

    $('body').css("cursor","wait");

    $('#'+id).remove();
    $('body').after("<div id='"+id+"'></div>");
    var dialog = $('#'+id).dialog({
            height: dialogHeight,
            width: dialogWidth,
            draggable: false,
            bgiframe: true,
            resizable: false,
            modal: true,
            overlay:{
              background : '#000000' ,
              opacity : 0.75
            },
            title: title,
            open: function(){
              $(this).html(msg);
            },
            close: function(){
              isDialogOpen = false;
            },
            buttons:{
              'OK': function(){
                location.href = url;
              },
              'キャンセル': function(){
                $(this).dialog('close');
              }
            },
            dialogClass:'alert'
          });

    $('body').css("cursor","auto");

  }
}

function setMailView(name){
  var iframe = document.createElement('IFRAME');

  iframe.width = '100%';
  iframe.height = '100%';

  iframe.frameBorder = 0;
  iframe.marginheight = 0;
  iframe.marginwidth = 0;
  iframe.vspace = 0;
  iframe.src = '/viewMail.html?name='+name;

  $('#'+name).append(iframe);

}

function isSupportedDom(){
  var ret = true;

  $.each($.support, function(key, val){
    if (!val) {
      ret = false;
      return false;
    }
  });
  return ret;
}


function isIe(){
  var ret = false;

  var isMSIE = /*@cc_on!@*/false;

  if (isMSIE) {
    var ret = true;
  } else {
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.indexOf('trident') != -1){
      var ret = true;
    }
  }

  return ret;
}

function isChrome() {
  var ret = false;
  var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var isEdge = window.navigator.userAgent.toLowerCase().indexOf('edge') != -1;
  if (!!window.chrome && !isOpera && !isEdge) {
    ret = true;
  }

  return ret;
}

function isFirefox() {
  var ret = false;

  if (typeof InstallTrigger !== 'undefined') {
    ret = true;
  }

  return ret;
}

function isSafari() {
  var ret = false;

  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1){
    ret = true;
  }

  return ret;
}

function isEdge() {
  var ret = false;
  var isMSIE = /*@cc_on!@*/false;

  if (!isMSIE) {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('edge') != -1) {
      ret = true;
    }
  }

  return ret;
}


function getIeVersion(){
  var ret = null;

  if (isIe()) {
    var regexpIe4 = new RegExp('MSIE\\s*4\\.01',"im");
    var regexpIe5 = new RegExp('MSIE\\s*(5\\.(5|01|0))',"im");
    var regexpIe6 = new RegExp('MSIE\\s*6\\.0',"im");
    var regexpIe7 = new RegExp('MSIE\\s*7\\.0',"im");
    var regexpIe8 = new RegExp('MSIE\\s*8\\.0',"im");
    var regexpIe9 = new RegExp('MSIE\\s*9\\.0',"im");
    var regexpIe8Trident = new RegExp('Trident\\s*/\\s*4\\.0',"im");
    var regexpIe10 = new RegExp('MSIE\\s*10\\.0',"im");
    var regexpIe11 = new RegExp('Trident\\s*/\\s*7\\.0',"im");

    if (regexpIe4.test(navigator.appVersion)) {
      ret = 4;
    } else if(regexpIe5.test(navigator.appVersion)) {
      ret = 5;
    } else if(regexpIe6.test(navigator.appVersion)) {
      ret = 6;
    } else if(regexpIe7.test(navigator.appVersion)) {
      /*if (regexpIe8Trident.test(navigator.appVersion)) {
        ret = 8; // 8の互換モード
      } else {*/
        ret = 7;
      //}
    } else if(regexpIe8.test(navigator.appVersion)) {
      ret = 8;
    } else if(regexpIe9.test(navigator.appVersion)) {
      ret = 9;
    } else if(regexpIe10.test(navigator.appVersion)) {
      ret = 10;
    } else if(regexpIe11.test(navigator.appVersion)) {
      ret = 11;
    }
  }
  return ret;
}


/*******************************************************************************************
// call to onload
//   <img src="/img/tooltip.gif" onload="viewToolTip({$smarty.session.su->aid}, 1, this);">
//
// [ aAlign ]
//              topLeft       topMiddle       topRight
//            ┌─────────────────────┐
//  leftTop   │                                          │rightTop
//            │                                          │
//  leftMiddle│                 tool tip                 │rightMiddle
//            │                                          │
//  leftBottom│                                          │rightBottom
//            └─────────────────────┘
//              bottomLeft    bottomMiddle    bottomRight
*******************************************************************************************/
function viewToolTip(aTarget, aAid, aNo, aAlign, aWidth){

  var alignHash = Array();

  alignHash['topLeft'] = 'bottomMiddle';
  alignHash['topMiddle'] = 'bottomMiddle';
  alignHash['topRight'] = 'bottomMiddle';
  alignHash['bottomLeft'] = 'topMiddle';
  alignHash['bottomMiddle'] = 'topMiddle';
  alignHash['bottomRight'] = 'topMiddle';
  alignHash['leftTop'] = 'rightMiddle';
  alignHash['leftMiddle'] = 'rightMiddle';
  alignHash['leftBottom'] = 'rightMiddle';
  alignHash['rightTop'] = 'leftMiddle';
  alignHash['rightMiddle'] = 'leftMiddle';
  alignHash['rightBottom'] = 'leftMiddle';

  if (aAlign == undefined) {
    aAlign = 'bottomLeft';
  }
  if (aWidth == undefined) {
    aWidth = 200;
  }

  $(aTarget).wrap('<span style="font-size: 8pt;color:#0000FF;cursor:default;"><u></u></span>');
  var helpObj = $(aTarget).closest('span');
  $(aTarget).before('詳細');

  helpObj.qtip({
                    content: {
                               url   : "/getHelp.php?aid="+aAid+"&no="+aNo,
                               method: 'get'
                             },
                    position: {
                       corner: {
                          target: alignHash[aAlign],
                          tooltip: aAlign
                       }
                    },
                    style: {
                      tip: aAlign,
                      border: {
                         radius: 2,
                         color: '#6699CC'
                      },
                      width: aWidth
                    },
                    padding: 5,
                    background: '#A2D959',
                    color: 'black',
                    textAlign: 'left'
                 });

}

