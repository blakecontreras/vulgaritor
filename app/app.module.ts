import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { PhraseComponent } from './phrase/phrase.component'
import { AddWordComponent } from './words/add-word.component'
import { WordService } from './shared/services/word.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PhraseComponent,
    AddWordComponent
  ],
  providers: [
    WordService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
