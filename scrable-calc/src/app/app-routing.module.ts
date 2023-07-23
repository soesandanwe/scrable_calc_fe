import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/component/playground/playground.component';
import { ScoreCardComponent } from './playground/component/score-card/score-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'play', pathMatch: 'full' },
  { path: 'play', component: PlaygroundComponent },
  { path: 'viewTopScore', component: ScoreCardComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
