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

    <div class="jumbotron">
      <h1>Get Vulgar!</h1>
      <div *ngFor="let message of messages">
        {{ message.text }}
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
  messages = [
    { id: 1,
      text: "You fight like a dairy farmer!"
    },
    { id: 2,
      text: "How appropriate, you fight like a cow!"
    }
  ]
}
