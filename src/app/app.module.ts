import { CaloriePage } from './../pages/calorie/calorie';
import { HttpModule } from '@angular/http';
import { NativeAudio } from '@ionic-native/native-audio';
import { BreakfastPage } from '../pages/breakfast/breakfast';
import { LunchPage } from '../pages/lunch/lunch';
import { SnacksPage } from '../pages/snacks/snacks';
import { DinnerPage } from '../pages/dinner/dinner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {LoginPage} from '../pages/login/login';
import { MyApp } from './app.component';
import { Pedometer } from '@ionic-native/pedometer';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { SignupPage } from '../pages/signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { ActivityPage } from '../pages/activity/activity';
import { MedicalhistoryPage } from '../pages/medicalhistory/medicalhistory';
import { BodydimensionsPage } from '../pages/bodydimensions/bodydimensions';
import { HealthdataPage } from '../pages/healthdata/healthdata';
import { FoodsdataPage } from '../pages/foodsdata/foodsdata';
import { StepstrackerPage } from '../pages/stepstracker/stepstracker';
import { NutritiondataPage } from '../pages/nutritiondata/nutritiondata';
import { Health } from '@ionic-native/health';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FoodDataProvider } from '../providers/food-data/food-data';


export const firebaseConfig = {
  apiKey: "AIzaSyDxk-LwT0wNjTXsvCXqtNiooFAXTIzCRvs",
    authDomain: "ifit-e5702.firebaseapp.com",
    databaseURL: "https://ifit-e5702.firebaseio.com",
    projectId: "ifit-e5702",
    storageBucket: "ifit-e5702.appspot.com",
    messagingSenderId: "361231776486"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    ActivityPage,
    LoginPage,
    FoodsdataPage,
    MedicalhistoryPage,
    BodydimensionsPage,
    HealthdataPage,
    StepstrackerPage,
    BreakfastPage,
    LunchPage,
SnacksPage,
DinnerPage,
CaloriePage,
    NutritiondataPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(MyApp),
    HttpModule,

    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    ActivityPage,
    FoodsdataPage,
    LoginPage,
    BreakfastPage,
    LunchPage,
    CaloriePage,
SnacksPage,
DinnerPage,
    MedicalhistoryPage,
    BodydimensionsPage,
    HealthdataPage,
    NutritiondataPage,
    StepstrackerPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireModule,
    AngularFireDatabase,
    BackgroundMode,
    Pedometer,
    NativeAudio,
    SQLite,
    Health,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodDataProvider,HttpModule
    
  ]
})
export class AppModule {}
