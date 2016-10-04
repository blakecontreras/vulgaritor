import { Component } from '@angular/core'
import { Word } from './shared/models/word.ts'

@Component({
  selector: 'app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent {
  adjectives: Word[] = [
    { id: 0,
      text: "pustulent",
      selected: false
    },
    { id: 1,
      text: "typescripty",
      selected: false
    }
  ];
  nouns: Word[] = [
    { id: 0,
      text: "dairy farmer",
      selected: false
    },
    { id: 1,
      text: "cow",
      selected: false
    }
  ];
  selectedAdjective: Word = {id: null, text: null, selected: null};
  selectedNoun: Word = {id: null, text: null, selected: null};

  selectWord(word: Word, wordType: string) {
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
