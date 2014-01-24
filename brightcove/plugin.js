/**
 * Created by Adarsh on 1/24/14.
 */
(function() {
    //console.log("************ mediaEventPlugin.js has loaded ******************");
    var _stt_is_removed=false;

    function onPlayerReady() {
        videoPlayer.addEventListener(brightcove.api.events.MediaEvent.BEGIN, mediaEventHandler);
    }

    function mediaEventHandler(pEvent) {
        setTimeout(function(){$("#bcVideo").removeAttr("controls")},100);
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