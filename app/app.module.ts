import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { PhraseComponent } from './phrase/phrase.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent,
    PhraseComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
