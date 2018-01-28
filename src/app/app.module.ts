import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { TabAngularPage } from '../pages/tab-angular/tab-angular';
import { HomePage } from '../pages/home/home';
import { WelcomeSlidesPage } from '../pages/welcome-slides/welcome-slides';
import { LearnPage } from '../pages/learn/learn';
import { TabBootstrapPage } from '../pages/tab-bootstrap/tab-bootstrap';
import { TabLinuxPage } from '../pages/tab-linux/tab-linux';
import { TopNewsProvider } from '../providers/top-news/top-news';
@NgModule({
  declarations: [
    MyApp,
    WelcomeSlidesPage,
    HomePage,
    LearnPage,
    TabAngularPage,
    TabBootstrapPage,
    TabLinuxPage
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
    HomePage,
    LearnPage,
    TabAngularPage,
    TabBootstrapPage,
    TabLinuxPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TopNewsProvider
  ]
})
export class AppModule {}
