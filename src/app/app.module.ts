import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { TabAngularPage } from '../pages/tab-angular/tab-angular';
import { WelcomeSlidesPage } from '../pages/welcome-slides/welcome-slides';
import { LearnPage } from '../pages/learn/learn';
import { TabBootstrapPage } from '../pages/tab-bootstrap/tab-bootstrap';
import { TabLinuxPage } from '../pages/tab-linux/tab-linux';
import {DescriptionPage} from '../pages/description/description';

@NgModule({
  declarations: [
    MyApp,
    WelcomeSlidesPage,
    LearnPage,
    TabAngularPage,
    TabBootstrapPage,
    TabLinuxPage,
    DescriptionPage
   ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomeSlidesPage,
    LearnPage,
    TabAngularPage,
    TabBootstrapPage,
    TabLinuxPage,
    DescriptionPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
