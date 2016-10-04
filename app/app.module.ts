import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { PhraseComponent } from './phrase/phrase.component'
import { AddWordComponent } from './words/add-word.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [ 
    AppComponent,
    PhraseComponent,
    AddWordComponent 
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
