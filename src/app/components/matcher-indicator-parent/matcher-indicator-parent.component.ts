import { Component } from '@angular/core';
import { MatcherIdicatorComponent } from './matcher-idicator/matcher-idicator.component';

@Component({
  selector: 'dga-matcher-indicator-parent',
  standalone: true,
  imports: [MatcherIdicatorComponent],
  templateUrl: './matcher-indicator-parent.component.html',
  styleUrl: './matcher-indicator-parent.component.scss'
})
export class MatcherIndicatorParentComponent {
  value1: string = 'ქონება';
  value2: string[] = ['ქონება','ქონ','ქონების გასხვისება','საქონლის გასხვისება','',];
}