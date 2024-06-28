import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'dga-textarea',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,ReactiveFormsModule,CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
  }]
})
export class TextareaComponent implements ControlValueAccessor{
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';

  onChange = (value: any) => {};

  inputChange(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
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
