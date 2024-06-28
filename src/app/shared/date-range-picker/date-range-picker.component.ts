import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {ControlValueAccessor,NG_VALUE_ACCESSOR,ReactiveFormsModule,FormBuilder,FormGroup} from '@angular/forms';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { formatDate } from '@angular/common';
import { CustomDateAdapter,CUSTOM_DATE_FORMATS } from '../../validators/custom-date-adapter';
import { registerLocaleData } from '@angular/common';
import localeEnGb from '@angular/common/locales/en-GB';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NumericOnlyDateDirective } from '../../directives/numeric-only-date.directive';

registerLocaleData(localeEnGb);

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
    NumericOnlyDateDirective
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true,
    },
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
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
      if (value.start && value.end) {
        const formattedStart = formatDate(value.start, 'dd/MM/yyyy', 'en-GB');
        const formattedEnd = formatDate(value.end, 'dd/MM/yyyy', 'en-GB');
        this.onChange({ start: formattedStart, end: formattedEnd });
      }
    });
  }

  registerOnTouched(fn: any): void {}
}
