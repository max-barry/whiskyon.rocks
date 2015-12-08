(function() {

    window.onload = function() {

        var drinkingwords = [
            "AA",
            "Alcoholics Anonymous",
            "abuse",
            "alcoholism",
            "binge drinking",
            "cheers interjection",
            "delirium tremens",
            "dependency",
            "designated driver",
            "drink",
            "drinking",
            "drunk driving",
            "DUI",
            "Dutch courage",
            "DWI",
            "hangover",
            "happy hour",
            "high",
            "licensing hours",
            "licensing laws",
            "proof",
            "pub crawl",
            "session",
            "substance abuse",
            "toast",
            "bottoms up",
            "bring a bottle",
            "down the hatch",
            "gone to my head",
            "here's to someone",
            "poison",
            "that's the drink talking",
            "the demon drink",
            "contriteness",
            "contrition",
            "penitence",
            "regret",
            "remorse",
            "remorsefulness",
            "repentance",
            "rue",
            "self-reproach",
            "shame"
        ];

        var copylines = $(".container__content__copyline.--nowrap");

        copylines.each(function() {
            $(this).text(whi.shuffle(drinkingwords).join(" "));
        });

    };

})();