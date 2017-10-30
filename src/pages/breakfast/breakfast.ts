import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CaloriePage } from '../../pages/calorie/calorie';
/**
 * Generated class for the BreakfastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-breakfast',
  templateUrl: 'breakfast.html',
})
export class BreakfastPage {
  breakfastfoods =[];
  id:string;
  breakfastdata={
    breakfast: '',
    mydate: '',
     }
     breakfast: '';
    
     mydate: string;
  constructor(private modal: ModalController,public http: Http,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private view: ViewController,private storage: Storage) {
  }
  closeActivity() {
    this.view.dismiss();
  }
  savebreakfastcaloriesdata() {

  }
  getbreakfastdata() {
    
    var breakfastfood =[];
    this.http.get('https://api.nal.usda.gov/ndb/search/?format=json&q='+this.breakfast+'&sort=n&max=25&offset=0&api_key=DEMO_KEY').map(res =>res.json()).subscribe(data => {
      this.breakfastfoods =data.list.item;
      for (var breakfastfood of data.list.item) {
       
        console.log(this.breakfast);
        console.log(breakfastfood.name);
        console.log(breakfastfood.ndbno);
      }
      });
  }
  getbreakfastdata2(id) {
   
    this.navCtrl.push(CaloriePage, {
      param1: id});
 
  }
  savebreakfastdata(){
    this.storage.set('breakfastdata',{breakfast: this.breakfast,mydate:this.mydate}).then (() => {
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
        this.breakfast = data.breakfast;
        
        this.mydate=data.mydate;
    });
  }

  ionViewDidLoad() {
    
  }

}
