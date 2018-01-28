import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http ,Response } from '@angular/http'; 
//import { TopNewsProvider } from '../../providers/top-news/top-news';

@IonicPage()
@Component({
  selector: 'page-tab-angular',
  templateUrl: 'tab-angular.html',
})


export class TabAngularPage {

  ResNews :any;
  article:any[]=[];
  title:string='';
  description:string='';
  publishedAt:string='';
  url:string='';
  count:number=0;
  img:string='';
  source:string='';

   a:number[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
 //   console.log("Into Angular="+this.topNews.isWorking());
   }

  ionViewDidLoad() {
    this.getTopNews();
  }

 

  getTopNews(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c76b376a1e7346208f330eb65f8f30a2')
    .subscribe(
      (res:Response)=>{
        this.ResNews=res.json();
      //  console.log(News);
        console.log(this.ResNews.articles);
        for (let i = 0; i < (this.ResNews.articles).length; i++) {
          this.a.push(i);
          this.article.push(this.ResNews.articles[i]);
         // console.log("Articles="+this.article[i]);          
        }
        }
    );
  }

  



}
