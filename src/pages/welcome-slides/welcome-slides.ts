import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{LearnPage} from '../learn/learn';

@IonicPage()
@Component({
  selector: 'page-welcome-slides',
  templateUrl: 'welcome-slides.html',
})
export class WelcomeSlidesPage {
  skipMsg :string='Skip';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.skipMsg ='Skip';
  }

  skip(){
    this.navCtrl.push(LearnPage);
  }

}
