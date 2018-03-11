(function (window, google, mapster) {

    mapster.MAP_OPTIONS = {
        center: {
            lat: 37.79,
            lng: -122.43
        },
        zoom: 8,
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControlOptions: {
            position: google.maps.ControlPosition.DEFAULT,
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        cluster: true,
        geocoder: true
    };

})(window, google, window.Mapster || (window.Mapster = {}));