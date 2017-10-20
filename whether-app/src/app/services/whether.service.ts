import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class WhetherService{
  url:string;
  key:string;
  param:string;
  constructor(private httpService: Http) {
    this.param="home";
    this.key='9e7db42013986d4129ece94d54cdf3d4';

   }



  search(param1:string, params:Object={} ){
      this.param = param1;
      this.url='http://api.openweathermap.org/data/2.5/weather?q='+this.param+'&appid='+this.key;
      console.log('full url',this.url);
      if(params){
        return this.httpService.get(this.url).map( (result) =>  result.json() );
      }
  }

}
