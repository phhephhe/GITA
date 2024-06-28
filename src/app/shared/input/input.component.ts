import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'dga-input',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,ReactiveFormsModule,CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor{
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() isRequired: boolean = true;

  onChange = (value: any) => {};

  inputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  writeValue(obj: any): void {
    // value recive
    this.value = obj
  }

  registerOnChange(fn: any): void {
     // value change
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {}
}
