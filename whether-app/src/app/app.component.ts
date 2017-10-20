import { Component ,OnInit} from '@angular/core';
import {WhetherService} from './services/whether.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  result:any;
  loading:boolean;


  constructor(private ws:WhetherService){

  }

  ngOnInit(){

  }


  search(value){
      this.loading=true;
      this.ws.search(value).subscribe( data => {
        console.log('the data we receieved',data);
        this.result =data;
        this.loading = false;
      },error=>{
        console.log('error',error);
        this.loading = false;
      })
  }
}
