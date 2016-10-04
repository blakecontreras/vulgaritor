import { Component, Input } from '@angular/core'
import { Word } from '../shared/models/word'

@Component ({
  selector: 'phrase',
  template:`
    <div class="jumbotron col-md-8">
      <div>
        <h2>You {{ adjective.text }} {{ noun.text }}!</h2>
      </div>
    </div>
  `,
  styles: [`
    .jumbotron { margin-top: 30px; }
  `]
})

export class PhraseComponent {
  @Input() adjective: Word; 
  @Input() noun: Word;
};