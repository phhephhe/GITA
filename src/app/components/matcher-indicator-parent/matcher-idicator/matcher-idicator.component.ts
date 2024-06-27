import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'dga-matcher-idicator',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatListModule],
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
    const maxLength = Math.max(this.value1.length, item.length);
    if (maxLength === 0) {
      return 0;
    }
    const matchCount = this.value1.split('').filter((char, index) => char === item[index]).length;
    return (matchCount / maxLength) * 100;
  }
}
