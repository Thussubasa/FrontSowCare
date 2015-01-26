var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function popup(func) {
    var percent = 0;
    if (func == "open") {
        var a = $(".popup").children(".row").children(".col").children(".card");
        a.css({
            marginTop: -276,
        });
        percent = 100;
    } else if (func == "close") {
        percent = 0;
    }
    $(".popup").animate({
        fade: percent
    }, {
        step: function(now, fx) {
            var self = $('.popup'),
                card = self.children(".row").children(".col").children(".card");
            if ($(".popup").css("display") == "none") {
                $(".popup").css({
                    display: 'block',
                    opacity: 0,
                });

            }
            card.css({
                marginTop: (now * 2.76) - 200,
            })
            $(".popup").css({
                opacity: now / 100,
            });
            if(now == 0){
                $(".popup").css({
                    display: 'none',
                    opacity: 0,
                });
            }
        }
    });
}

$(function() {
    $(document).ready(function() {
        $("#login").click(function() {
            popup("open");
        });

        $(".cancel").click(function() {
            popup("close");
        });

        $(".do-login").click(function(){
            $(".page").fadeIn();
            setTimeout(function(){
                window.location.href = "page/main.html"
            },200);
        });
    });
});
