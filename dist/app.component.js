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
                text: "typescripty",
                selected: false
            }
        ];
        this.nouns = [
            { id: 0,
                text: "dairy farmer",
                selected: false
            },
            { id: 1,
                text: "cow",
                selected: false
            }
        ];
        this.selectedAdjective = { id: null, text: null, selected: null };
        this.selectedNoun = { id: null, text: null, selected: null };
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
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <header>\n      <nav class=\"navbar\">\n        <div class=\"navbar-header\">\n          <a href=\"/\" class=\"navbar-brand\">The Vulgaritor</a>\n        </div>\n      </nav>\n    </header>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h3 class=\"text-center\">Choose Your Weapon</h3>\n        <div class=\"col-md-6\">\n          <h4>Adjectives</h4>\n            <div *ngFor=\"let adjective of adjectives\"\n                 (click)=\"selectWord(adjective, 'adjective')\"\n                 style=\"cursor:pointer;\"\n                 [class.bg-primary]=\"adjective.selected\"\n            >\n              {{ adjective.text }}\n            </div>\n          </div>\n        <div class=\"col-md-6\">\n        <h4>Nouns</h4>\n        <div *ngFor=\"let noun of nouns\"\n             (click)=\"selectWord(noun, 'noun')\"\n             style=\"cursor:pointer;\"\n             [class.bg-primary]=\"noun.selected\"\n        >\n          {{ noun.text }}\n        </div>\n        </div>\n      </div>\n      <div class=\"jumbotron col-md-8\" *ngIf=\"selectedAdjective.text && selectedNoun.text\">\n        <div>\n          You {{ selectedAdjective.text }} {{ selectedNoun.text }}!\n        </div>\n      </div>\n    </div>\n\n    <footer class=\"text-center\">\n      &copy; 2016\n    </footer>\n  ",
            styles: ["\n    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map