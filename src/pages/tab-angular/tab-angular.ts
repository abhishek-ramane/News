import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http ,Response } from '@angular/http'; 
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import {DescriptionPage} from '../description/description';


@IonicPage()
@Component({
  selector: 'page-tab-angular',
  templateUrl: 'tab-angular.html',
})


export class TabAngularPage {

  ResNews :any;
  article:any[]=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private http:Http,
    private modelCtrl: ModalController) {
   }

  ionViewDidLoad() {
    this.getTopNews();
  }

 

  getTopNews(){
    return this.http.get('https://newsapi.org/v2/top-headlines?apiKey=c76b376a1e7346208f330eb65f8f30a2&country=in')
    .subscribe(
      (res:Response)=>{
        this.ResNews=res.json();
        console.log(this.ResNews.articles);
        for (let i = 0; i < (this.ResNews.articles).length; i++) {
          this.article.push(this.ResNews.articles[i]);
          }
        }
    );
  }

  openDescription(i){
    console.log("clicking");
    console.log("from articles="+i.title);
    this.modelCtrl.create(DescriptionPage,{
      i:i
    }).present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getTopNews();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }



}
