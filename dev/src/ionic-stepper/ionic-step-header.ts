import { Component, Input } from '@angular/core';
import { IonicStepStatus } from "./ionic-step";

@Component({
  selector: 'ionic-step-header',
  template: `
<div class="ionic-step-header-icon"
     [class.ionic-step-header-icon-error]="isError"
     [class.ionic-step-header-icon-active]="active">
    <span class="ionic-step-header-icon-number" *ngIf="icon === 'number'; else ionIcon">{{index + 1}}</span>
    <ng-template #ionIcon><ion-icon [name]="!isError ? icon : errorIcon"></ion-icon></ng-template>
</div>
<div class="ionic-step-header-text-container" [class.mt]="description">
  <div class="ionic-step-header-label"
       [class.ionic-step-header-label-error]="isError"
       [class.ionic-step-header-label-active]="active">{{label}}</div>
  <div class="ionic-step-header-description" [class.ionic-step-header-description-error]="isError" *ngIf="description">{{description}}</div>
</div>
  `,
  host: {
    '[class.ionic-step-header-status-error]': 'isError'
  }
})
export class IonicStepHeaderComponent {

  @Input() label: string;
  @Input() description: string;
  @Input() icon: string = 'number';
  @Input() errorIcon: string = 'close';
  @Input() index: number;
  @Input() active: boolean = false;
  @Input() status: IonicStepStatus = '';

  get isError(): boolean { return this.status === 'error' };

  constructor() {
  }


}