// numeric-only.directive.ts
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[numericOnlyDate]',
  standalone: true,
})
export class NumericOnlyDateDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = this.el.nativeElement as HTMLInputElement;
    if (input && typeof input.value === 'string') {
      const initialValue = input.value;

      // Allow only numbers, slashes, and periods
      const sanitizedValue = initialValue.replace(/[^0-9/.]/g, '');

      // Restrict the length to 10 characters
      const truncatedValue = sanitizedValue.slice(0, 10);
   
      if (initialValue !== truncatedValue) {
        input.value = truncatedValue;
        event.stopPropagation();
    
        // Trigger an input event manually
        const inputEvent = new Event('input', { bubbles: true });
        input.dispatchEvent(inputEvent);
    }
    }}
}
