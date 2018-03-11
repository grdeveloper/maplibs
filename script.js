(function (window, $) {

    var $mapster = $("#map").mapster(Mapster.MAP_OPTIONS),
        geocoder = new google.maps.Geocoder();

    $mapster.mapster("getCurrentPosition", function (position) {
        $mapster.mapster("addMarker", {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    });

    $mapster.mapster("addMarker", {
        lat: 37.83,
        lng: -122.23,
        content: "<div style='color: dodgerblue'>Time to travel</div>"
    });

    $mapster.mapster("setPin", "#pin", {
        position: {
            lat: 37.79,
            lng: -122.43
        },
        pov: {
            heading: 100,
            pitch: 0
        }
    });

    $mapster.mapster("addMarker", {
        location: "Golden Gate Bridge, San Francisco, CA"
    });

    // for(var i = 0; i < 40; i++){
    //     $mapster.mapster("addMarker", {
    //         lat: 53.8 + Math.random(),
    //         lng: 27.785 + Math.random(),
    //         content: "<div style='color: dodgerblue'>Time to travel</div>"
    //     });
    // }

    // //options
    // var options = mapster.MAP_OPTIONS,
    //
    // //map
    // element = document.getElementById("map"),
    //
    // map = mapster.create(element, options);
    //
    // for(var i = 0; i < 40; i++){
    //     map.addMarker({
    //         lat: 53.8 + Math.random(),
    //         lng: 27.785 + Math.random(),
    //         visible: true,
    //         id: 2,
    //         draggable: true,
    //         events: [{
    //             name: "click",
    //             callback: function (e, marker) {
    //                 alert("clicked");
    //                 console.log(e, marker);
    //             }
    //         },{
    //             name: "dragend",
    //             callback: function () {
    //                 alert("dragged");
    //             }
    //         }],
    //         content: "<div style='color: dodgerblue'>Time to travel</div>",
    //         icon: "http://www.nicosia.org.cy/CMSTemplates/NICOSIAMUNICIPALITY/Images/MapIcons/Bus.png"
    //     });
    // }

})(window, jQuery);