import { ModalController, ViewController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Health } from '@ionic-native/health';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Pedometer } from '@ionic-native/pedometer';
import { Component, ChangeDetectorRef } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  todaysteps: number;
  steps: number;
  totalsteps: number=0;
  startdate: string;
enddate: number;
todaydate:any;
distance:number;
stepsdatas:any;
todaystepsdatas:any;
  constructor(private sqlite: SQLite,private backgroundMode: BackgroundMode,public navCtrl: NavController,private ref: ChangeDetectorRef,public pedometer: Pedometer, public navParams: NavParams,private modal: ModalController,private view: ViewController,private health: Health) {
    
    this.todaydate = new Date().toDateString();
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
      })
      .then((db: SQLiteObject) => {
        
      db.executeSql('select * from stepsdata ORDER by date DESC', {}).then((result) => {
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
      
      db.executeSql('select * from stepsdata ORDER by date DESC', {}).then((result) => {
        let todaystepsdata = [];
        if (result.rows.length > 0) {
          
          
            todaystepsdata.push({
              todaysteps: result.rows.item(0).steps,
              todaydate: result.rows.item(0).date
            });
            
         
        
        this.todaystepsdatas=todaystepsdata;
      }
      });
      });
  }
  
  
  
  closeActivity() {
    this.view.dismiss();
        
      }
  ionViewDidLoad() {
    
    console.log(this.todaydate);
  }
  
}
