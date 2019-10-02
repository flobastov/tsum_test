import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCyrillic]'
})
export class CyrillicDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('window:keypress', ['$event']) keyEvent(event: KeyboardEvent) {
    if (this.el.nativeElement === document.activeElement) {
      const pattern = /^[?!,.а-яА-ЯёЁ0-9\s]+$/;
      const inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
  }

}
