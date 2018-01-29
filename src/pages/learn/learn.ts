import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TabAngularPage } from '../tab-angular/tab-angular';
import { TabBootstrapPage } from '../tab-bootstrap/tab-bootstrap';
import { TabLinuxPage } from '../tab-linux/tab-linux';
import {AboutMePage} from '../about-me/about-me';

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {

  tabAngularRoot = TabAngularPage;
  tabBootstrapRoot = TabBootstrapPage;
  tabLinuxRoot = TabLinuxPage;


  constructor(public navCtrl: NavController) {}

}
