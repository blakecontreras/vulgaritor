"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var word_1 = require('../shared/models/word');
var word_service_1 = require('../shared/services/word.service');
var AddWordComponent = (function () {
    function AddWordComponent(wordService) {
        this.wordService = wordService;
        this.wordAdded = new core_1.EventEmitter();
        this.newAdjective = new word_1.Word();
        this.newNoun = new word_1.Word();
        this.active = true;
    }
    AddWordComponent.prototype.handleSubmit = function () {
        var _this = this;
        this.wordService.addWords({ adjective: this.newAdjective, noun: this.newNoun })
            .subscribe(function (words) {
            _this.wordAdded.emit({ adjectives: words[0], nouns: words[1] });
        });
        this.newAdjective = new word_1.Word();
        this.newNoun = new word_1.Word();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddWordComponent.prototype, "wordAdded", void 0);
    AddWordComponent = __decorate([
        core_1.Component({
            selector: 'add-word',
            styles: ["\n    form { \n      padding: 5px;\n      background: #ECF0F1;\n      border-radius: 2px;\n    }\n  "],
            template: "\n  <div class=\"jumbotron\">\n    <form #form=\"ngForm\" (ngSubmit)=\"handleSubmit()\" *ngIf=\"active\">\n    <h4>Add Words Here!</h4>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"adjective\" placeholder=\"Adjective\"\n        [(ngModel)]=\"newAdjective.text\" #text=\"ngModel\">\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"noun\" placeholder=\"Noun\"\n        [(ngModel)]=\"newNoun.text\" #text=\"ngModel\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\"\n>\n        Add Word(s)\n      </button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService])
    ], AddWordComponent);
    return AddWordComponent;
}());
exports.AddWordComponent = AddWordComponent;
//# sourceMappingURL=add-word.component.js.map