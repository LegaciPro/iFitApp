import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
/**
 * Generated class for the NutritiondataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nutritiondata',
  templateUrl: 'nutritiondata.html',
})
export class NutritiondataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private modal: ModalController,private view: ViewController) {
  }
  closeActivity() {
    this.view.dismiss();
        
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NutritiondataPage');
  }

}
