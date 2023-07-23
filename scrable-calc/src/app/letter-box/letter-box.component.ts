import { Component, Input, OnInit, SimpleChanges, forwardRef } from '@angular/core';
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
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  onTouched = () => {};

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) : void {
    const {value} = changes;
    if(value && value.currentValue !== value.previousValue) {
      this.value = value.currentValue
    };
  }

  onChange($event: any) : void{
    this.value=$event.target.value;
    this.propagateChange(this.value);
  }

  onBlur($event: any) : void {
    this.onTouched();
    this.value = $event.target.value;
    if(!this.value) this.propagateChange(null);
  }

}
