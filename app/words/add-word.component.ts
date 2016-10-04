import { Component, Output, EventEmitter } from '@angular/core'
import { Word } from '../shared/models/word'

@Component({
  selector: 'add-word',
  styles: [`
    form { 
      padding: 10px;
      background: #ECF0F1;
      border-radius: 3px;
    }
  `],
  template: `
    <form #form="ngForm" (ngSubmit)="handleSubmit()" *ngIf="active">
    <h3>Add a Word</h3>
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
  `
})

export class AddWordComponent {
  newAdjective: Word = new Word();
  newNoun: Word = new Word();
  active: boolean = true;

  handleSubmit() {
    console.log("Adjective: ", this.newAdjective, " Noun: ", this.newNoun)

    this.newAdjective = new Word();
    this.newNoun = new Word();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}