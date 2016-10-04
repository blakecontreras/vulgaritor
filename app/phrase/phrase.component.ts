import { Component, Input } from '@angular/core'
import { Word } from '../shared/models/word'

@Component ({
  selector: 'phrase',
  template:`
    <div class="jumbotron col-md-8" *ngIf="adjective.text && noun.text">
      <div>
        You {{ adjective.text }} {{ noun.text }}!
      </div>
    </div>
  `
})

export class PhraseComponent {
  @Input() adjective: Word; 
  @Input() noun: Word;
};