import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOneCharacterOnly]'
})
export class OneCharacterOnlyDirective {

  @Input() isAlphaNumeric: boolean= true;
 
  regexStr: string = "^[a-zA-Z]$";

  constructor(private _el:ElementRef) { 
  }

  @HostListener('keypress', ['$event']) onKeyPress(event:any) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    alert("c");
    this.validateFields(event);
  }

  validateFields(event:any) {
    setTimeout(() => {
    alert(this._el.nativeElement.value);
      this._el.nativeElement.value = this._el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
      event.preventDefault();

    }, 1)
  }
}
