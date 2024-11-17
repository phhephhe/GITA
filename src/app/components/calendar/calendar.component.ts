import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCalendarCellCssClasses, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'GITA-calendar',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})

export class CalendarComponent {

  selected: Date | null = new Date();

  dateClass(date: Date): MatCalendarCellCssClasses {
    const classes = [];
    if (date.getDate() === 7 || date.getDate() === 14 || date.getDate() === 26) {
      classes.push('highlighted-date');
    }
    return classes;
  }
  
}