import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the BodydimensionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bodydimensions',
  templateUrl: 'bodydimensions.html',
})
export class BodydimensionsPage {
 bodydim={
weight: '',
height: '',
chest: '',
necksize: '',
hipsize: '',
mydate: '',
steps:'',
 }
 weight: number;
 height: number;
 chest: number;
 necksize:number;
 hipsize: number;
 mydate: string;
 steps: number;
  constructor(public alertCtrl: AlertController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams,private modal: ModalController,private view: ViewController) {
   this.mydate = new Date().toISOString();
  }
  closeActivity() {
    this.view.dismiss();
    this.storage.get('bodydims').then((val) => {
      console.log('My name is', val);
    });
      }
      savebodydim() {
        this.storage.set('bodydims',{weight: this.weight,
        height:this.height,chest:this.chest,necksize:this.necksize,hipsize:this.hipsize,mydate:this.mydate}).then (() => {
          let alert = this.alertCtrl.create({
            title: 'saved',
            subTitle: 'your data saved successfuly',
            buttons: ['Nice!'],
          });
          alert.present();
        },
        error => console.error('error ', error));
        this.storage.get('bodydims')
        .then
        (data => {
          this.weight = data.weight;
          this.height = data.height;
          this.chest = data.chest;
          this.necksize = data.necksize;
          this.hipsize = data.hipsize;
      });
      
    
    }
  ionViewDidLoad() {
    
  this.storage.get('steps').then((val) => {
    console.log('My name is', val);
  
  });
    this.storage.get('bodydims')
    .then
    (data => {
      this.weight = data.weight;
      this.height = data.height;
      this.chest = data.chest;
      this.necksize = data.necksize;
      this.hipsize = data.hipsize;
      this.mydate=data.mydate;
  });
    
    
  }
}

