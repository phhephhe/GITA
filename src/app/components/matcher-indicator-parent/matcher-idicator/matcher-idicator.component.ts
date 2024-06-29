import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { compareTwoStrings } from 'string-similarity';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'dga-matcher-idicator',
  standalone: true,
  imports: [MatCardModule,CommonModule, MatListModule,MatProgressBarModule],
  templateUrl: './matcher-idicator.component.html',
  styleUrl: './matcher-idicator.component.scss'
})
export class MatcherIdicatorComponent {

  @Input() value1: string = '';
  @Input() value2: string[] = [];

  get percentageMatches(): number[] {
    return this.value2.map(item => this.getPercentageMatch(item));
  }

  private getPercentageMatch(item: string): number {
    const similarity = compareTwoStrings(this.value1, item);
    return similarity * 100;
  }
  
}