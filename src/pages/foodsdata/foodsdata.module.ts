import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodsdataPage } from './foodsdata';

@NgModule({
  declarations: [
    FoodsdataPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodsdataPage),
  ],
})
export class FoodsdataPageModule {}
