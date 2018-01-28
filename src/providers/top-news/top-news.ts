import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TopNewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TopNewsProvider Provider');
  }
  
    isWorking(){
      return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c76b376a1e7346208f330eb65f8f30a2')
      .subscribe(data=>{
        console.log("executing");
        console.log(data);
      });
    }

}
