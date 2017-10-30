import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthdataPage } from './healthdata';

@NgModule({
  declarations: [
    HealthdataPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthdataPage),
  ],
})
export class HealthdataPageModule {}
