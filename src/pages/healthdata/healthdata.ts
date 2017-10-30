import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the HealthdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-healthdata',
  templateUrl: 'healthdata.html',
})
export class HealthdataPage {
  healthdata={
    bloodglucose: '',
    bloodalchohol: '',
    inhalerusage: '',
    mydate: '',
     }
     bloodglucose: number = 0;
     bloodalchohol: number = 0;
     inhalerusage: string;
    
     mydate: string;
     
  constructor(public alertCtrl: AlertController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams,private modal: ModalController,private view: ViewController) {
    this.mydate = new Date().toISOString();
  }
  closeActivity() {
    this.view.dismiss();
        
      }
      savehealthdata(){
      this.storage.set('healthdata',{bloodglucose: this.bloodglucose,
        bloodalchohol:this.bloodalchohol,inhalerusage:this.inhalerusage,mydate:this.mydate}).then (() => {
          let alert = this.alertCtrl.create({
            title: 'saved',
            subTitle: 'your data saved successfuly',
            buttons: ['Nice!'],
          });
          alert.present();
        },
        error => console.error('error ', error));
        this.storage.get('healthdata')
        .then
        (data => {
          this.bloodglucose = data.bloodglucose;
          this.bloodalchohol = data.bloodalchohol;
          this.inhalerusage = data.inhalerusage;
          this.mydate=data.mydate;
      });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthdataPage');
    
      this.storage.get('healthdata')
      .then
      (data => {
        this.bloodglucose = data.bloodglucose;
        this.bloodalchohol = data.bloodalchohol;
        this.inhalerusage = data.inhalerusage;
        this.mydate=data.mydate;
    });
  }

}
