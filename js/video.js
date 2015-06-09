var fullScreenVideo = fullScreenVideo || {};
var containerHeight = 0;

fullScreenVideo = {
    name: 'fullScreenVideo',
    backgroundVideo: 'bkzpbwczcb',
    backgroundVideoDiv: '#wistia_bkzpbwczcb',

    embedVideo: function() {
        var videoOptions = {};

        Wistia.obj.merge(videoOptions, {
            plugin: {
                cropFill: {
                    src: "//fast.wistia.com/labs/crop-fill/plugin.js"
                }
            }
        });

        wistiaEmbed = Wistia.embed(fullScreenVideo.backgroundVideo, videoOptions);

        wistiaEmbed.bind("play", function() {
            wistiaEmbed.pause();
            wistiaEmbed.time(0);
            $(fullScreenVideo.backgroundVideoDiv).css('visibility', 'visible');
            wistiaEmbed.play();
            return this.unbind;
        });

    },

    fixTextPosition: function() {
        var width = $(window).width();
        var height = $(window).height();
        textWidth = $("#text").width();
        textHeight = $("#text").height();
        $("#video_container").css("width", width).css("height", (height * .65));
        var containerHeight = $("#video_container").height();
        $("#text").css("left", (width/2) - (textWidth/2)).css("top", (containerHeight/2) - (textHeight/2));
    },

    fixVideoPosition: function() {
    }
}

$(document).ready(function() {
    fullScreenVideo.fixTextPosition();
    fullScreenVideo.fixVideoPosition();
    $("#text").delay(200).animate({opacity: 1}, 650);
});

$(window).resize(fullScreenVideo.fixTextPosition);

fullScreenVideo.embedVideo();
