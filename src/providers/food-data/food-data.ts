import { FoodsdataPage } from './../../pages/foodsdata/foodsdata';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FoodDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodDataProvider {
 foods: any;
 
  constructor(public http: Http) {
    console.log('Hello FoodDataProvider Provider');
  }
getfooddata() {
  var food = [];
this.http.get('https://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=DEMO_KEY').map(res =>res.json()).subscribe(data => {
this.foods =data.list.item;
for (var i of data.list.item) {
  
  food.push({name:i.name.split(','),
id:i.id,
  });
 
  
  console.log(i.name);
  console.log(i.id);
}
console.log(this.foods);
});

}

}
