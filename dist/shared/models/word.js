"use strict";
var Word = (function () {
    function Word(id, text, selected) {
        if (id === void 0) { id = null; }
        if (text === void 0) { text = ""; }
        if (selected === void 0) { selected = false; }
        this.id = id;
        this.text = text;
        this.selected = selected;
    }
    return Word;
}());
exports.Word = Word;
//# sourceMappingURL=word.js.map