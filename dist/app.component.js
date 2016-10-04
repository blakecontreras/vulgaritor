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
var AppComponent = (function () {
    function AppComponent() {
        this.adjectives = [
            { id: 0,
                text: "pustulent",
                selected: false
            },
            { id: 1,
                text: "cantankerous",
                selected: false
            },
            { id: 2,
                text: "poxy",
                selected: false
            },
            { id: 3,
                text: "indolent",
                selected: false
            },
            { id: 4,
                text: "shiftless",
                selected: false
            },
            { id: 5,
                text: "typescripty",
                selected: false
            },
            { id: 6,
                text: "boorish",
                selected: false
            },
        ];
        this.nouns = [
            { id: 0,
                text: "dairy farmer",
                selected: false
            },
            { id: 1,
                text: "cow",
                selected: false
            },
            { id: 2,
                text: "pirate",
                selected: false
            },
            { id: 3,
                text: "pig",
                selected: false
            },
            { id: 4,
                text: "jockey",
                selected: false
            },
            { id: 5,
                text: "weasel",
                selected: false
            },
            { id: 6,
                text: "submariner",
                selected: false
            },
        ];
        this.selectedAdjective = { id: null, text: "...", selected: null };
        this.selectedNoun = { id: null, text: "...", selected: null };
    }
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
        if (event.adjective.text) {
            this.adjectives.push(event.adjective);
        }
        if (event.noun.text) {
            this.nouns.push(event.noun);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map