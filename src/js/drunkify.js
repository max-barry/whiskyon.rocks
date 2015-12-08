(function() {


    whi.shakesToDate = 0;
    
    var _shakeLength = 750,
        _targetSentence = $(".container__content__copyline.--target"),
        _drunkifyTrigger = $("#drunkify"),
        _body = $("body"),
        _startBlinkingAt = 5;

    var _replaceAt = function(str, index, character) {
        // @link http://max.fyi/1XOTi0h
        return str.substr(0, index) + character + str.substr(index+character.length);
    };

    var _blink = function() {
        _body.removeClass (function (index, css) {
            return (css.match (/(^|\s)--blink-\S+/g) || []).join(' ');
        });
        _body[0].offsetWidth = _body[0].offsetWidth;
        _body.addClass("--blink-" + (whi.shakesToDate - _startBlinkingAt));
    };

    var _cleanUp = function() {
        _targetSentence.removeClass("--shakeit");
        _drunkifyTrigger.prop("disabled", false);
        _drunkifyTrigger.prev().removeClass("--drink");
    };

    var _shakeTarget = function() {
        _targetSentence.addClass("--shakeit");
    };

    var _blurPeriphery = function() {
        var shadowToAdd = (whi.shakesToDate + 2) + "px 0px";
        $(".container__content__copyline:not(.--target)").css("text-shadow", shadowToAdd);
    };

    var _mispellTarget = function() {
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz./,;'[]#",
            currentCopy = _targetSentence.children("span").text(),
            copyLength = currentCopy.length,
            numOfCharsToChange = Math.round(copyLength * 0.05),
            indexOfCharsToChange = [];

        while (indexOfCharsToChange.length < numOfCharsToChange) {
            indexOfCharsToChange.push(Math.floor(Math.random() * copyLength));
        }

        console.log(indexOfCharsToChange);
        console.log(currentCopy);

        for (var i = indexOfCharsToChange.length - 1; i >= 0; i--) {
            currentCopy = _replaceAt(currentCopy, indexOfCharsToChange[i], possible[Math.floor(Math.random()*possible.length)]);
        }

        console.log(currentCopy);

        _targetSentence.find("span").text(currentCopy);

    };

    var _handleButton = function() {
        _drunkifyTrigger.prop("disabled", true);
        _drunkifyTrigger.prev().addClass("--drink");
    };

    whi.drunkify = function() {
        whi.shakesToDate++;
        
        _handleButton();
        _shakeTarget();
        _mispellTarget();
        _blurPeriphery();

        if (whi.shakesToDate > _startBlinkingAt) {
            _blink();
        }

        setTimeout(_cleanUp, _shakeLength + 250);
    };

    _drunkifyTrigger.on("click", whi.drunkify);

})();