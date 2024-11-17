import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'GITA-dropdown',
  standalone: true,
  imports: [MatSelectModule,CommonModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
  }],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() data: string[] = [];
  @Input() label: string = '';
  @Input() placeholder: string = '';

  value: any;

  onChange = (value: any) => {};

  writeValue(value: any): void {
    this.value = value;
  }

  onSelectChange(event: any) {
    this.onChange(event.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
}