/**
 * Created by Adarsh on 1/24/14.
 */
(function() {
    //console.log("************ mediaEventPlugin.js has loaded ******************");
    var _stt_is_removed=false;
    var _videoId;

    function onPlayerReady() {
        videoPlayer.addEventListener(brightcove.api.events.MediaEvent.BEGIN, mediaEventHandler);
        videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, mediaEventHandler);
        var _videoId = videoPlayer.getCurrentVideo();
    }

    function mediaEventHandler(pEvent) {
        $.get("http://dashboard.findabilitysciences.com/seventen28/api/v1/ajaxtrackvideoplayed.html?id=" + _videoId+"&source=twitter");
        $.get("http://dashboard.findabilitysciences.com/seventen28dev/api/v1/ajaxtrackvideoplayed.html?id=" + _videoId+"&source=twitter");
        $.get("http://dev.seventen28.com/api/v1/ajaxtrackvideoplayed.html?id=" + _videoId+"&source=twitter");
    }

    var _player = brightcove.api.getExperience();
    var videoPlayer = _player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    var experience = _player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);

    if (experience.getReady()) {
        onPlayerReady();
    } else {
        experience.addEventListener(brightcove.player.events.ExperienceEvent.TEMPLATE_READY, onPlayerReady);
    }
}());