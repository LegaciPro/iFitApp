
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ModalController } from 'ionic-angular';
import { Pedometer } from '@ionic-native/pedometer';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import { HomePage } from '../../pages/home/home';
import { Storage } from '@ionic/storage';
import { BackgroundMode } from '@ionic-native/background-mode';
/**
 * Generated class for the StepstrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stepstracker',
  templateUrl: 'stepstracker.html',
})
export class StepstrackerPage {

  steps: number;
mydate:string;


  constructor(private ref: ChangeDetectorRef, public platform: Platform, public pedometer: Pedometer, public modalCtrl: ModalController, private afAuth: AngularFireAuth,private afDatabase: AngularFireDatabase, private storage: Storage, private backgroundMode: BackgroundMode) {
    this.mydate = new Date().toISOString();
this.pedometer.startPedometerUpdates()
      .subscribe((data) => {
          this.steps = data.numberOfSteps;
          this.storage.set('steps', {steps: this.steps,mydate:this.mydate});
          this.ref.detectChanges();

        });
        this.storage.get('steps')
        .then
        (data => {
          this.steps = data.steps;
          
      });
}
 

 

ionViewWillLoad() {
this.afAuth.authState.subscribe(data => console.log(data));

 }
}
