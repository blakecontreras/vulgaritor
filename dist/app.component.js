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
            { id: 1,
                text: "pustulent"
            },
            { id: 2,
                text: "typescripty"
            }
        ];
        this.nouns = [
            { id: 1,
                text: "dairy farmer"
            },
            { id: 2,
                text: "cow"
            }
        ];
        this.message = {
            adjective: null,
            noun: null
        };
    }
    AppComponent.prototype.selectAdjective = function (adjective) {
        this.message.adjective = adjective;
    };
    ;
    AppComponent.prototype.selectNoun = function (noun) {
        this.message.noun = noun;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <header>\n      <nav class=\"navbar\">\n        <div class=\"navbar-header\">\n          <a href=\"/\" class=\"navbar-brand\">The Vulgaritor</a>\n        </div>\n      </nav>\n    </header>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h3 class=\"text-center\">Choose Your Weapon</h3>\n        <div class=\"col-md-6\">\n          <h4>Adjectives</h4>\n            <div *ngFor=\"let adjective of adjectives\"\n                 (click)=\"selectAdjective(adjective.text)\"\n            >\n              {{ adjective.text }}\n            </div>\n          </div>\n        <div class=\"col-md-6\">\n        <h4>Nouns</h4>\n        <div *ngFor=\"let noun of nouns\"\n             (click)=\"selectNoun(noun.text)\"\n        >\n          {{ noun.text }}\n        </div>\n        </div>\n      </div>\n      <div class=\"jumbotron col-md-8\" *ngIf=\"message.adjective && message.noun\">\n        <div>\n          You {{ message.adjective }} {{ message.noun }}!\n        </div>\n      </div>\n    </div>\n\n    <footer class=\"text-center\">\n      &copy; 2016\n    </footer>\n  ",
            styles: ["\n    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map