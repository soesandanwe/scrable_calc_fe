import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from '../../service/playground.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlayGround } from '../../model/playground';
import { Router } from '@angular/router';



@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  letterMap: any[] =[];
  totalScore: number = 0;
  finalWord: string = '';
  playGroundFormGroup!: FormGroup;
  model: PlayGround;
  controlNo: number = 0;

  constructor(
    private playgroundService: PlaygroundService, 
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.model = PlayGround.createEmptyModel();
    this.playGroundFormGroup = this.formBuilder.group({
      letter1: [this.model.letter1],
      letter2: [this.model.letter2],
      letter3: [this.model.letter3],
      letter4: [this.model.letter4],
      letter5: [this.model.letter5],
      letter6: [this.model.letter6],
      letter7: [this.model.letter7],
      letter8: [this.model.letter8],
      letter9: [this.model.letter9],
      letter10:[this.model.letter10]
    });
    this.letterPoints();
  }

  ngOnInit(): void {

    this.playGroundFormGroup.controls['letter1'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter1'], letter,1);
    });

    this.playGroundFormGroup.controls['letter2'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter2'], letter,2);
    });

    this.playGroundFormGroup.controls['letter3'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter3'], letter,3);
    });

    this.playGroundFormGroup.controls['letter4'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter4'], letter,4);
    });

    this.playGroundFormGroup.controls['letter5'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter5'], letter,5);
    });

    this.playGroundFormGroup.controls['letter6'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter6'], letter,6);
    });


    this.playGroundFormGroup.controls['letter7'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter7'], letter,7);
    });

    this.playGroundFormGroup.controls['letter8'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter8'], letter,8);
    });

    this.playGroundFormGroup.controls['letter9'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter9'], letter,9);
    });

    this.playGroundFormGroup.controls['letter10'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter10'], letter,10);
    });
    
  }

  calculateScore(oldValue: string, newValue: string, controlNo: number) {

    let oldValueAmount = this.letterMap.find((item:any) => item.letter == oldValue)?.point ?? 0;
    let newValueAmount = this.letterMap.find((item:any) => item.letter == newValue)?.point ?? 0;

    if(!newValue) {
      this.totalScore = this.totalScore > 0 ? this.totalScore - oldValueAmount : this.totalScore;
      return;
    }
    
    if(this.controlNo == controlNo) {
      if(this.totalScore > 0) {
        this.totalScore = this.totalScore - oldValueAmount + newValueAmount;
        return;
      } 
    } else {
      this.controlNo = controlNo
    }
    this.totalScore += newValueAmount;
  }

  public letterPoints (): any {
    this.playgroundService.getLetterPoints().subscribe((item) => {
      this.letterMap = item;
    });
  }  

  resetTiles() {
    this.playGroundFormGroup.reset();
  }

  saveScore() {
    if(this.totalScore && this.totalScore > 0) {
      const data = {
        ... this.playGroundFormGroup.getRawValue(),
        score: this.totalScore
      };

      this.playgroundService.saveScore(data).subscribe((result) => {
        this.playGroundFormGroup.reset();
      }, (error) => {
        // this.toastShow = true;
        // this.toastMessage = "Fail submission."
      });
    } 
  }

  viewTopScore() {
    this.router.navigate(["/viewTopScore/"]);
  }

}
