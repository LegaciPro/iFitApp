import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';


/**
 * Generated class for the MedicalhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicalhistory',
  templateUrl: 'medicalhistory.html',
})
export class MedicalhistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private modal: ModalController,private view: ViewController) {
  }
  closeActivity() {
    this.view.dismiss();
        
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalhistoryPage');
  }

}
