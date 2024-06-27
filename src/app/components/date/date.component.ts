import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';

@Component({
  selector: 'dga-date',
  standalone: true,
  imports: [CustomDatePipe,MatCardModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent {
  date = new Date();
}
