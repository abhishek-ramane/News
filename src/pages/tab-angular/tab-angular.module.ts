import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabAngularPage } from './tab-angular';

@NgModule({
  declarations: [
    TabAngularPage,
  ],
  imports: [
    IonicPageModule.forChild(TabAngularPage),
  ],
})
export class TabAngularPageModule {}
