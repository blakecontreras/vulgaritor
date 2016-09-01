import { Component } from '@angular/core'

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
        <div *ngFor="let adjective of adjectives"
             (click)="selectAdjective(adjective.text)"
        >
          {{ adjective.text }}
        </div>
      </div>
      <div class="jumbotron col-md-8">
        <div>
          You {{ message.adjective }} dairy farmer!
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
    { id: 1,
      text: "pustulent"
    },
    { id: 2,
      text: "typescripty"
    }
  ],
  message = {
    adjective: "",
  },
  selectAdjective(adjective) {
    this.message.adjective = adjective;
  }
}
