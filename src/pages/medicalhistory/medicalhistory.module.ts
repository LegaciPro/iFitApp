import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalhistoryPage } from './medicalhistory';

@NgModule({
  declarations: [
    MedicalhistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalhistoryPage),
  ],
})
export class MedicalhistoryPageModule {}
