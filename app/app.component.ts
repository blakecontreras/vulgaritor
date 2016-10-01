import { Component } from '@angular/core'

export class Word {

}

@Component({
  selector: 'app',
  template: `
    <header>
      <nav class="navbar">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">The Vulgaritor</a>
        </div>
      </nav>
    </header>

    <div class="row">
      <div class="col-md-4">
        <h3 class="text-center">Choose Your Weapon</h3>
        <div class="col-md-6">
          <h4>Adjectives</h4>
            <div *ngFor="let adjective of adjectives"
                 (click)="selectWord($event, adjective, 'adjective')"
                 style="cursor:pointer;"
                 [class.bg-primary]="adjective.selected"
            >
              {{ adjective.text }}
            </div>
          </div>
        <div class="col-md-6">
        <h4>Nouns</h4>
        <div *ngFor="let noun of nouns"
             (click)="selectWord($event, noun, 'noun')"
             style="cursor:pointer;"
             [class.bg-primary]="noun.selected"
        >
          {{ noun.text }}
        </div>
        </div>
      </div>
      <div class="jumbotron col-md-8" *ngIf="selectedAdjective.text && selectedNoun.text">
        <div>
          You {{ selectedAdjective.text }} {{ selectedNoun.text }}!
        </div>
      </div>
    </div>

    <footer class="text-center">
      &copy; 2016
    </footer>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})

export class AppComponent {
  adjectives = [
    { id: 0,
      text: "pustulent",
      selected: false
    },
    { id: 1,
      text: "typescripty",
      selected: false
    }
  ];
  nouns = [
    { id: 0,
      text: "dairy farmer",
      selected: false
    },
    { id: 1,
      text: "cow",
      selected: false
    }
  ];
  selectedAdjective = {text: null, selected: null};
  selectedNoun = {text: null, selected: null};

  selectWord(event, word, wordType) {
    if (wordType === 'adjective') {
      if (this.selectedAdjective.selected !== null) {
        this.selectedAdjective.selected = !this.selectedAdjective.selected;
      }
      this.selectedAdjective = word;
    } else if (wordType === 'noun') {
      if (this.selectedNoun.selected !== null) {
        this.selectedNoun.selected = !this.selectedNoun.selected;
      }
      this.selectedNoun = word;
    }
    word.selected = !word.selected;
  };
}
