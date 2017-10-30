import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
/**
 * Generated class for the SnacksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-snacks',
  templateUrl: 'snacks.html',
})
export class SnacksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private view: ViewController) {
  }
  closeActivity() {
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SnacksPage');
  }

}
