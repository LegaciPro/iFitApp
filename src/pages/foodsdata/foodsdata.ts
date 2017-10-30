import { FoodDataProvider } from './../../providers/food-data/food-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BreakfastPage } from '../../pages/breakfast/breakfast';
import { LunchPage } from '../../pages/lunch/lunch';
import { SnacksPage } from '../../pages/snacks/snacks';
import { DinnerPage } from '../../pages/dinner/dinner';
import { ViewController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the FoodsdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-foodsdata',
  templateUrl: 'foodsdata.html',
})
export class FoodsdataPage {
foods = [];
totalcaloriesdatas:any;
totalcalval:number;
caloriesdatas:any;
serves:number=0;
todaydate:any;
todaydate1:any;
  constructor(private sqlite: SQLite,private view: ViewController,private modal: ModalController,public http: Http,public navCtrl: NavController, public navParams: NavParams, public foodsService: FoodDataProvider) {
    this.todaydate = new Date();
    var day = this.todaydate.getDate();
    if (day < 10)
    {
        day = "0" + day;
    }

    var month = this.todaydate.getMonth() + 1;
    if (month < 10)
    {
        month = "0" + month;
    }

    var year = this.todaydate.getFullYear();

    this.todaydate1= day + "/" + month + "/" + year;

    this.sqlite.create({
      name: 'data.db',
      location: 'default'
      })
      .then((db: SQLiteObject) => {
        
      db.executeSql('select * from caloriesdata', {}).then((result) => {
        let caloriesdata = [];
        if (result.rows.length > 0) {
          
          for (let i = 0; i < result.rows.length; i++) {
            caloriesdata.push({
              calories: result.rows.item(i).calval,
              date: result.rows.item(i).date,
              foodtime: result.rows.item(i).foodtime,
            });
            
         
        }
        this.caloriesdatas=caloriesdata;
      }
      });
      
      db.executeSql('select date,SUM(calval) as totalcalval from caloriesdata GROUP by date', {}).then((result) => {
        let totalcaloriesdata = [];
        if (result.rows.length > 0) {
          var totalcalval=this.totalcalval;
          for (let i = 0; i < result.rows.length; i++) {
            totalcaloriesdata.push({
              totalcalories: result.rows.item(i).totalcalval,
              date: result.rows.item(i).date,
            });
            
         
        }
        this.totalcaloriesdatas=totalcaloriesdata;
      }
      });
      });
    
  }
breakfast() {
  const breakfastModal= this.modal.create(BreakfastPage);
  breakfastModal.present();
}
lunch() {
  const lunchModal= this.modal.create(BreakfastPage);
  lunchModal.present();
}
snacks() {
  const snacksModal= this.modal.create(BreakfastPage);
  snacksModal.present();
}
dinner() {
  const dinnerModal= this.modal.create(BreakfastPage);
  dinnerModal.present();
}
increase(serves){
  this.serves++;
  }
  decrease(serves){
    if (this.serves>0){
      this.serves--;
    }
  }
  closeActivity() {
    this.view.dismiss();
        
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodsdataPage');
console.log(this.todaydate);
   
  }
}
