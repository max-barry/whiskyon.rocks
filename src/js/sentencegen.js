(function(){
    
    var targetEl = $("#sentence-target"),
        triggerEl = $("#sentence-generate");

    whi.generate = function() {

        triggerEl.closest(".controls__action").addClass("regretit");

        var medium = whi.getRandomFromArray(whi.params.mediums),
            target = whi.getRandomFromArray(whi.params.targets),
            indObj = whi.getRandomFromArray(whi.params.indObject),
            dirObj = whi.getRandomFromArray(whi.params.dirObject);
        
        var generatedSentence = ["You could", medium, target, indObj, dirObj].join(" ") + ".";

        targetEl.text(generatedSentence);

        setTimeout(function(){
            triggerEl.closest(".controls__action").removeClass("regretit");
        }, 500);

    };

    triggerEl.on("click", whi.generate);

})();