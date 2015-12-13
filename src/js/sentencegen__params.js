(function(){

    whi.params = {};

    whi.params.mediums = [
        "Tweet",
        "Facebook",
        "Snapchat",
        "Periscope",
        "Instagram",
        "text",
        "WhatsApp",
        "sext",
        "smoke signal",
        "Tinder",
        "Grindr",
        "Youtube",
    ];

    whi.params.targets = [
        "your aunt",
        "your uncle",
        "your mother",
        "your father",
        "your brother",
        "your sister",
        "your grandad",
        "your pop-pop",
        "your grandma",
        "your girlfriend",
        "your boyfriend",
        "your bang-buddy",
        "your boo",
        "your bae",
        "your buddy",
        "your enemy",
        "your frenemy",
        "your childhood friend",
        "your son",
        "your daughter",
        "your child",
        "your niece",
        "your nephew",
        "your sweetheart",
        "a stranger",
        "the police",
    ];

    whi.params.indObject = [
        "a picture of",
        "a thesis for",
        "the meaning of",
        // "a reason to be at",
        "a lewd version of",
        "a revealing secret about",
        "you in your underwear with",
        "words about",
    ];

    whi.params.dirObject = function() {

        var allDirectObjects = [];
        
        var yourTheir = [
            "dreams",
            "nightmares",
            // "hopes",
            "wishes",
            "underwear",
            "penis",
            "boobs",
            "birthday",
            "christmas gifts",
        ];

        yourTheir.forEach(function(item, i){
            allDirectObjects.push("your " + item);
            allDirectObjects.push("their " + item);
        });

        var others = [
            "a man they don't know",
            "a woman they don't know",
            "a party they're not invited to",
            "a threat",
            "a whip you just ghost rode",
            "your best whip... and then your best nae nae",
        ];

        return allDirectObjects.concat(others);

    }();

})();