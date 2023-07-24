import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from '../../service/playground.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlayGround } from '../../model/playground';
import { Router } from '@angular/router';
import { ToastMessageService } from 'src/app/common/service/toast-message.service';



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
  show: boolean = false;
  toastMessage: string = "";

  constructor(
    private playgroundService: PlaygroundService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: ToastMessageService
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
      this.calculateScore(this.playGroundFormGroup.value['letter1'], letter);
    });

    this.playGroundFormGroup.controls['letter2'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter2'], letter);
    });

    this.playGroundFormGroup.controls['letter3'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter3'], letter);
    });

    this.playGroundFormGroup.controls['letter4'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter4'], letter);
    });

    this.playGroundFormGroup.controls['letter5'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter5'], letter);
    });

    this.playGroundFormGroup.controls['letter6'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter6'], letter);
    });


    this.playGroundFormGroup.controls['letter7'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter7'], letter);
    });

    this.playGroundFormGroup.controls['letter8'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter8'], letter);
    });

    this.playGroundFormGroup.controls['letter9'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter9'], letter);
    });

    this.playGroundFormGroup.controls['letter10'].valueChanges.subscribe(letter => {
      this.calculateScore(this.playGroundFormGroup.value['letter10'], letter);
    });
    
  }

  calculateScore(oldValue: string, newValue: string) {

    let oldValueAmount = this.letterMap.find((item:any) => item.letter == oldValue?.toUpperCase())?.point ?? 0;
    let newValueAmount = this.letterMap.find((item:any) => item.letter == newValue?.toUpperCase())?.point ?? 0;

    if(!newValue) {
      this.totalScore = this.totalScore > 0 ? this.totalScore - oldValueAmount : this.totalScore;
      return;
    }

    if(this.totalScore > 0) {
      this.totalScore = this.totalScore - oldValueAmount + newValueAmount;
    } else {
      this.totalScore += newValueAmount;
    }
   
  }

  public letterPoints (): any {
    this.playgroundService.getLetterPoints().subscribe((item) => {
      this.letterMap = item;
    });
  }  

  resetTiles() {
    this.playGroundFormGroup.reset();
    this.totalScore = 0;
  }
   saveScore() {
    if(this.totalScore && this.totalScore > 0) {
      const data = {
        ... this.playGroundFormGroup.getRawValue(),
        score: this.totalScore
      };

    this.playgroundService.saveScore(data).subscribe((result) => {
        this.playGroundFormGroup.reset();
        this.toastMessage = "Successfully Save";
        this.toast.show(this.toastMessage, { classname: 'bg-success', delay: 10000 });
      }, (error) => {
        this.toastMessage = "The transactoin is unsuccessful.";
        this.toast.show(this.toastMessage, { classname: 'bg-danger', delay: 15000 });
      });
    } 
  }

  viewTopScore() {
    this.router.navigate(["/viewTopScore/"]);
  }

  disableSaveScore(): boolean {
    return this.totalScore <= 0 ;
  }

}
