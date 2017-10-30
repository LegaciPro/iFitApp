import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the DinnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dinner',
  templateUrl: 'dinner.html',
})
export class DinnerPage {

  constructor(public http: Http,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private view: ViewController,private storage: Storage) {
  }
  closeActivity() {
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DinnerPage');
  }

}
