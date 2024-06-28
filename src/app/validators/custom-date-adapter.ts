import { Injectable } from '@angular/core';
import { NativeDateAdapter, MatDateFormats } from '@angular/material/core';
@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      return this.toLocaleDateString(date, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    }
    return date.toDateString();
  }

  override parse(value: any): Date | null {
    if (typeof value === 'string') {
      const normalizedValue = value.replace(/[\.\- ,]/g,'/'); // Replace '.', '-', and ' ' with '/'
      const str = normalizedValue.split('/');
      if (str.length >= 3) {
        const day = Number(str[0]);
        const month = Number(str[1]) - 1; // Month is zero-based in JavaScript Date
        const year = Number(str[2]);
        return new Date(year, month, day);
      }
    }
    return value ? new Date(value) : null;
  }

  private toLocaleDateString(
    date: Date,
    options: Intl.DateTimeFormatOptions
  ): string {
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }
}

export const CUSTOM_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
