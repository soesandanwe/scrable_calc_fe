import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from '../../service/playground.service';
import { ScoreCard } from '../../model/score-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  scores: ScoreCard[] = [];
  constructor(private playgroundService: PlaygroundService,
    private router: Router) { 
    this.viewTopScores();
  }

  ngOnInit(): void {
   
  }

  viewTopScores() : void {
    this.playgroundService.viewTopScore().subscribe((result) => {
      this.scores = result.content;
    });
  }

  play() : void {
    this.router.navigate(["/play/"]);
  }
}
