import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StepstrackerPage } from './stepstracker';

@NgModule({
  declarations: [
    StepstrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(StepstrackerPage),
  ],
})
export class StepstrackerPageModule {}
