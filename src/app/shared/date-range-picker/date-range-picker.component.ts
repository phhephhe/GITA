import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {ControlValueAccessor,NG_VALUE_ACCESSOR,ReactiveFormsModule,FormBuilder,FormGroup} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true,
    }
  ],
})
export class DateRangePickerComponent implements OnInit, ControlValueAccessor {
  @Input() label: string = "";
  range!: FormGroup;

  private onChange: (value: any) => void = () => {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.range = this.fb.group({
      start: [''],
      end: [''],
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.range.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.range.valueChanges.subscribe((value: any) => {
      this.onChange(value);
    });
  }

  registerOnTouched(fn: any): void {}
}