import { Component } from '@angular/core'
import { Word } from './shared/models/word'
import { WordService } from './shared/services/word.service'

@Component({
  selector: 'app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [WordService]
})

export class AppComponent {
  constructor(private wordService: WordService) {}

  adjectives: Word[] = [
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
  nouns: Word[] = [
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
  selectedAdjective: Word = {id: null, text: "...", selected: null};
  selectedNoun: Word = {id: null, text: "...", selected: null};

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

    console.log(this.wordService.getWords());
  };

  onWordAdded(event) {
    if (event.adjective.text) {
      this.adjectives.push(event.adjective)
    }
    if (event.noun.text) {
      this.nouns.push(event.noun)
    }
  }
}
