import { NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeSlidesPage } from './welcome-slides';
import { NavController } from 'ionic-angular';

@NgModule({
  declarations: [
    WelcomeSlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeSlidesPage),
  ],
})
export class WelcomeSlidesPageModule {
  skipMsg :string="Skip";

  constructor(public navCtrl:NavController){

  }

 
}
