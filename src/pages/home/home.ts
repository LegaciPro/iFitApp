import { ActivityPage } from '../../pages/activity/activity';
import { MedicalhistoryPage } from '../../pages/medicalhistory/medicalhistory';
import { BodydimensionsPage } from '../../pages/bodydimensions/bodydimensions';
import { HealthdataPage } from '../../pages/healthdata/healthdata';
import { NutritiondataPage } from '../../pages/nutritiondata/nutritiondata';
import { StepstrackerPage } from '../../pages/stepstracker/stepstracker';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Pedometer } from '@ionic-native/pedometer';
import { Component, ChangeDetectorRef } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { NativeAudio } from '@ionic-native/native-audio';
import { FoodsdataPage } from '../../pages/foodsdata/foodsdata';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
name :string;
todaysteps: number;
steps: number;
steps2: number;
totalsteps: number=0;
startdate:number;
enddate:number;
todaydate:string;
distance:number;
stepsdatas:any;
  constructor(private nativeAudio: NativeAudio,private ref: ChangeDetectorRef,public pedometer: Pedometer,private sqlite: SQLite,private backgroundMode: BackgroundMode,public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,private storage: Storage, private modal: ModalController) {
 
    
      
  }

stepsData() {
  
  this.sqlite.create({
    name: 'data.db',
    location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS stepsdata(id INTEGER PRIMARY KEY AUTOINCREMENT,steps INTEGER,date DATETIME)', {});
      
      //data insert section
      
      
    db.executeSql('select * from stepsdata WHERE date = \''+this.startdate+'\'', {}).then((result) => {
      
      if (result.rows.length > 0) {

        db.executeSql('UPDATE stepsdata SET steps=\''+this.steps+'\' WHERE date = \''+this.startdate+'\'', []);
      } else {
        db.executeSql('INSERT INTO stepsdata(steps,date) VALUES(\''+this.steps+'\',\''+this.startdate+'\')', []);
      }
    });
    db.executeSql('select * from stepsdata', {}).then((result) => {
      let stepsdata = [];
      if (result.rows.length > 0) {
        
        for (let i = 0; i < result.rows.length; i++) {
          stepsdata.push({
            steps: result.rows.item(i).steps,
            date: result.rows.item(i).date
          });
          
       
      }
      this.stepsdatas=stepsdata;
    }
    });
    
    });
  
}
openActivity() {
  
 
    this.navCtrl.push(ActivityPage);
}
openBodydime() {
  const bodydimModal= this.modal.create(BodydimensionsPage);
  bodydimModal.present();
  }
  openHealthdat() {
    const healthdatModal= this.modal.create(HealthdataPage);
    healthdatModal.present();
    }
    openMedicalhist() {
      const medicalhistModal= this.modal.create(MedicalhistoryPage);
      medicalhistModal.present();
      }
      openFoodsdat() {
        const foodsdataModal= this.modal.create(FoodsdataPage);
        foodsdataModal.present();
        }
        
        ionViewDidLoad() {
          
          
      }
}
