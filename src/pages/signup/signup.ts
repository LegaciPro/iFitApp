import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User} from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth) {
  }

async signup(user : User){
	try {
	const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
	console.log(result);
	}
	catch(e){
	console.error(e);
	}
}
 login(){
	
	this.navCtrl.push(LoginPage);
}

}

