import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-letter-box',
  templateUrl: './letter-box.component.html',
  styleUrls: ['./letter-box.component.scss'],
  providers:[
      {
        provide:NG_VALUE_ACCESSOR,
        useExisting: forwardRef(()=> LetterBoxComponent),
        multi: true,
      }
  ]
})
export class LetterBoxComponent implements OnInit, ControlValueAccessor {

  @Input() elementId: string= "";
  @Input() value: string = "";
  @Input() isReadOnly: boolean = false;
  
  constructor() { }
  propagateChange=(_:any) => {};
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  onTextKeyUp($event: any) : void{
    this.value=$event.target.value;
    this.propagateChange(this.value);
  }

}
