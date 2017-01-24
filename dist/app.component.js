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
var word_service_1 = require('./shared/services/word.service');
var AppComponent = (function () {
    function AppComponent(wordService) {
        this.wordService = wordService;
        this.selectedAdjective = { id: null, text: "...", selected: null };
        this.selectedNoun = { id: null, text: "...", selected: null };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wordService.getWords()
            .subscribe(function (words) {
            _this.adjectives = words[0];
            _this.nouns = words[1];
        });
    };
    AppComponent.prototype.selectWord = function (word, wordType) {
        if (wordType === 'adjective') {
            if (this.selectedAdjective.selected !== null) {
                this.selectedAdjective.selected = !this.selectedAdjective.selected;
            }
            this.selectedAdjective = word;
        }
        else if (wordType === 'noun') {
            if (this.selectedNoun.selected !== null) {
                this.selectedNoun.selected = !this.selectedNoun.selected;
            }
            this.selectedNoun = word;
        }
        word.selected = !word.selected;
    };
    ;
    AppComponent.prototype.onWordAdded = function (event) {
        this.adjectives = event.adjectives;
        this.nouns = event.nouns;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css']
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map