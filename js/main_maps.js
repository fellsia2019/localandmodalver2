$(document).ready(function () {

    $('#map__mainLocal').addClass('scrolloff');                // set the mouse events to none when doc is ready
    
    $('#mainLocal_item').on("mouseup",function(){          // lock it when mouse up
        $('#map__mainLocal').addClass('scrolloff'); 
        //somehow the mouseup event doesn't get call...
    });
    $('#mainLocal_item').on("mousedown",function(){        // when mouse down, set the mouse events free
        $('#map__mainLocal').removeClass('scrolloff');
    });

    $("#map__mainLocal").mouseleave(function () {              // becuase the mouse up doesn't work... 
        $('#map__mainLocal').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
                                                    // or you can do it on some other event
    });
    $('#map__mainLocal2').addClass('scrolloff');                // set the mouse events to none when doc is ready
    
    $('#mainLocal_item2').on("mouseup",function(){          // lock it when mouse up
        $('#map__mainLocal2').addClass('scrolloff'); 
        //somehow the mouseup event doesn't get call...
    });
    $('#mainLocal_item2').on("mousedown",function(){        // when mouse down, set the mouse events free
        $('#map__mainLocal2').removeClass('scrolloff');
    });

    $("#map__mainLocal2").mouseleave(function () {              // becuase the mouse up doesn't work... 
        $('#map__mainLocal2').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
                                                    // or you can do it on some other event
    });
    $('#map__mainLocal3').addClass('scrolloff');                // set the mouse events to none when doc is ready
    
    $('#mainLocal_item3').on("mouseup",function(){          // lock it when mouse up
        $('#map__mainLocal3').addClass('scrolloff'); 
        //somehow the mouseup event doesn't get call...
    });
    $('#mainLocal_item3').on("mousedown",function(){        // when mouse down, set the mouse events free
        $('#map__mainLocal3').removeClass('scrolloff');
    });

    $("#map__mainLocal3").mouseleave(function () {              // becuase the mouse up doesn't work... 
        $('#map__mainLocal3').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
                                                    // or you can do it on some other event
    });
});