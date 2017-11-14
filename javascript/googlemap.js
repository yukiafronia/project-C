google.maps.event.addDomListener(window, 'load', function () {
    var lat = 35.30233375318131;
    var lng = 139.48155283927917;

    var latlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scaleControl: true
    };
    var mapObj = new google.maps.Map(document.getElementById('gmap'), mapOptions);
});