function formatText(index, panel) {
  return index + "";
}

var j = jQuery.noConflict();

j(function () {
    j('input.form-submit',j('#search-block-form')).val(' ');

    j('.anythingSlider').anythingSlider({
        easing: "easeInOutExpo",        // Anything other than "linear" or "swing" requires the easing plugin
        autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not.
        delay: 4000,                    // How long between slide transitions in AutoPlay mode
        startStopped: false,            // If autoPlay is on, this can force it to start stopped
        animationTime: 1000,             // How long the slide transition takes
        hashTags: true,                 // Should links change the hashtag in the URL?
        buildNavigation: false,          // If true, builds and list of anchor links to link to each slide
		pauseOnHover: true,             // If true, and autoPlay is enabled, the show will pause on hover
		startText: "Старт",             // Start text
        stopText: "Стоп",               // Stop text
        navigationFormatter: formatText       // Details at the top of the file on this use (advanced use)
    });
    
    j("#slide-jump").click(function(){
        j('.anythingSlider').anythingSlider(6);
    });
    
});
