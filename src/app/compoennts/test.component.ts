import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class TestComponent {

  currentCaseKey: 'caseOne' | 'caseTwo' | 'caseThree' = 'caseOne';

  setTitle(caseKey: 'caseOne' | 'caseTwo' | 'caseThree') {
    this.currentCaseKey = caseKey;
  }
}
