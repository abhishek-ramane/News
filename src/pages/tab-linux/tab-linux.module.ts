import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabLinuxPage } from './tab-linux';

@NgModule({
  declarations: [
    TabLinuxPage,
  ],
  imports: [
    IonicPageModule.forChild(TabLinuxPage),
  ],
})
export class TabLinuxPageModule {}
