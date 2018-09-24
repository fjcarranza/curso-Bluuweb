import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  lista: Array<any>=
  [
    {
       titulo:"gato",
       color:"#c00057"
    },
    {
      titulo:"perro",
      color:"#e86c00"
    }
  ]
  constructor(public navCtrl: NavController) {

  }

}
