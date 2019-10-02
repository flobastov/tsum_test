import {Directive, ElementRef, HostListener} from '@angular/core';
import {NgControl} from '@angular/forms';

export enum KEY_CODE {
  PLUS = 43,
  MINUS = 45
}

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {

  constructor(private el: ElementRef, private ngControl: NgControl) {
  }

  private increment() {
    this.el.nativeElement.value++;
    this.ngControl.control.setValue(this.el.nativeElement.value);
  }

  private decrement() {
    this.el.nativeElement.value--;
    this.ngControl.control.setValue(this.el.nativeElement.value);
  }

  @HostListener('window:keypress', ['$event']) keyEvent(event: KeyboardEvent) {
    if (this.el.nativeElement === document.activeElement) {
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        event.preventDefault();

        if (event.keyCode === KEY_CODE.PLUS) {
          this.increment();
        }

        if (event.keyCode === KEY_CODE.MINUS) {
          this.decrement();
        }
      }
    }
  }

}
