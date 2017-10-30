import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AlertController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { FoodsdataPage } from '../../pages/foodsdata/foodsdata';
/**
 * Generated class for the CaloriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calorie',
  templateUrl: 'calorie.html',
})
export class CaloriePage {
  parameter1 =[];
  todaydate:any;
  todaydate1:any;
  td:any;
  d:any;
  footime:string;
  footim='';
  param1 = [];
  calor1 : number;
  calor2 = [];
  serves:number=1;
  foodsdata = "";
  constructor(public alertCtrl: AlertController,private view: ViewController,private sqlite: SQLite,public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.parameter1 = navParams.get('param1');
    console.log(this.parameter1);
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

    var fooddata =[];
    this.http.get('https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno='+this.parameter1+'').map(res =>res.json()).subscribe(data => {
      this.foodsdata =data.report.foods;
      console.log(this.foodsdata);
      
      for (var fooddata of data.report.foods) {
       
        
        console.log(fooddata.nutrients[0].nutrient);
        console.log(fooddata);
      }
      
      });


  }

increase(serves){
this.serves++;
}
decrease(serves){
  if (this.serves>1){
    this.serves--;
  }
}
savecaloriedata(id){
  


  var footim: '';
  var foodtim: any;
  var serves:number;
  var serve:number;
  serve=this.serves;
  foodtim=this.footim;
  this.calor1 = serve*id;
  

foodtim=this.footim;
this.sqlite.create({
  name: 'data.db',
  location: 'default'
  })
  .then((db: SQLiteObject) => {
    db.executeSql('CREATE TABLE IF NOT EXISTS caloriesdata(id INTEGER PRIMARY KEY AUTOINCREMENT,calval INTEGER,foodtime STRING,date DATETIME)', {});
    
    //data insert section
    
    
  db.executeSql('select * from caloriesdata WHERE date =\''+this.todaydate1+'\'  AND foodtime = \''+this.footim+'\'', {}).then((result) => {
    
    if (result.rows.length > 0) {

      db.executeSql('UPDATE caloriesdata SET calval=\''+this.calor1+'\' WHERE date = \''+this.todaydate1+'\' AND foodtime = \''+this.footim+'\'', []).then (() => {
        let alert = this.alertCtrl.create({
          title: 'saved',
          subTitle: 'your data saved successfuly',
          buttons: ['Nice!'],
        });
        alert.present();
      },
      error => console.error('error ', error));;
    } else {
      db.executeSql('INSERT INTO caloriesdata(calval,foodtime,date) VALUES(\''+this.calor1+'\',\''+this.footim+'\',\''+this.todaydate1+'\')', []).then (() => {
        let alert = this.alertCtrl.create({
          title: 'saved',
          subTitle: 'your data saved successfuly',
          buttons: ['Nice!'],
        });
        alert.present();
      },
      error => console.error('error ', error));;
    }
  });

  
  });
}
closeActivity() {
  this.view.dismiss();
  this.navCtrl.push(FoodsdataPage);
    }
  ionViewDidLoad() {
  this.todaydate1;
    console.log('ionViewDidLoad CaloriePage');
    console.log(this.footime);
    console.log(this.td);
    
  }

}
