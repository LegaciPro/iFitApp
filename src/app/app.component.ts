import { ActivityPage } from '../pages/activity/activity';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Pedometer } from '@ionic-native/pedometer';
import { Component, ChangeDetectorRef } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FoodsdataPage } from '../pages/foodsdata/foodsdata';
import { SignupPage } from '../pages/signup/signup';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  name :string;
  todaysteps: number;
  steps: number;
  steps2: number;
  totalsteps: number=0;
  startdate: number;
enddate: number;
todaydate:string;
distance:number;
stepsdatas:any;
  constructor(private sqlite: SQLite,private ref: ChangeDetectorRef,private backgroundMode: BackgroundMode,public pedometer: Pedometer,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.backgroundMode.setDefaults({ silent: true });
      this.backgroundMode.enable();
      
      this.backgroundMode.overrideBackButton();
      
     this.backgroundMode.excludeFromTaskList();
      
      statusBar.styleDefault();
      splashScreen.hide();
      this.todaydate = new Date().toISOString();
      
      this.pedometer.startPedometerUpdates();  
      this.pedometer.startPedometerUpdates()
      .subscribe((data) => {
        
         this.steps = data.numberOfSteps;
          this.startdate = data.startDate;
          this.enddate = data.endDate;
          this.ref.detectChanges();
          if (this.startdate==this.enddate){
            this.pedometer.startPedometerUpdates();  
            this.pedometer.startPedometerUpdates()
            .subscribe((data) => {
              
               this.steps = data.numberOfSteps;
                this.startdate = data.startDate;
                this.enddate = data.endDate;
                this.ref.detectChanges();
              });
          } else {
            this.pedometer.stopPedometerUpdates();
            this.pedometer.startPedometerUpdates();
            this.pedometer.startPedometerUpdates()
            .subscribe((data) => {
              
               this.steps = data.numberOfSteps;
                this.startdate = data.startDate;
                this.enddate = data.endDate;
                this.ref.detectChanges();
              });
          }
      });
      setInterval(() => {
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
        
          
          });
      }, 1000);
        
          
    });
  }
}
