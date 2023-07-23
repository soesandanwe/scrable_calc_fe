import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterBoxComponent } from './letter-box/letter-box.component';
import { OneCharacterOnlyDirective } from './common/one-character-only.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaygroundComponent } from './playground/component/playground/playground.component';
import { ScoreCardComponent } from './playground/component/score-card/score-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    LetterBoxComponent,
    OneCharacterOnlyDirective,
    ScoreCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
