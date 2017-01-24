import { Component, Output, EventEmitter } from '@angular/core'
import { Word } from '../shared/models/word'
import { WordService } from '../shared/services/word.service'


@Component({
  selector: 'add-word',
  styles: [`
    form { 
      padding: 5px;
      background: #ECF0F1;
      border-radius: 2px;
    }
  `],
  template: `
  <div class="jumbotron">
    <form #form="ngForm" (ngSubmit)="handleSubmit()" *ngIf="active">
    <h4>Add Words Here!</h4>
      <div class="form-group">
        <input type="text" class="form-control" name="adjective" placeholder="Adjective"
        [(ngModel)]="newAdjective.text" #text="ngModel">
      </div>

      <div class="form-group">
        <input type="text" class="form-control" name="noun" placeholder="Noun"
        [(ngModel)]="newNoun.text" #text="ngModel">
      </div>

      <button type="submit" class="btn btn-lg btn-block btn-primary"
>
        Add Word(s)
      </button>
    </form>
  </div>
  `
})

export class AddWordComponent {
  @Output() wordAdded = new EventEmitter();
  newAdjective: Word = new Word();
  newNoun: Word = new Word();
  active: boolean = true;

  constructor(private wordService: WordService) {}

  handleSubmit() {
    this.wordService.addWords({ adjective: this.newAdjective, noun: this.newNoun })
      .subscribe(words => {
        this.wordAdded.emit({ adjectives: words[0], nouns: words[1] });
      })
    console.log("Adjective: ", this.newAdjective, " Noun: ", this.newNoun)

    this.newAdjective = new Word();
    this.newNoun = new Word();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}