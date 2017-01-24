import { Component, OnInit } from '@angular/core'
import { Word } from './shared/models/word'
import { WordService } from './shared/services/word.service'

@Component({
  selector: 'app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent implements OnInit {
  adjectives: Word[];
  nouns: Word[];
  selectedAdjective: Word = {id: null, text: "...", selected: null};
  selectedNoun: Word = {id: null, text: "...", selected: null};

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.wordService.getWords()
      .subscribe(words => {
        this.adjectives = words[0];
        this.nouns = words[1];
      })
  }
  
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

  onWordAdded(event) {
    this.adjectives = event.adjectives;
    this.nouns = event.nouns;
  }
}
