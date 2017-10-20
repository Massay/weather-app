import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WhetherCardComponent } from './whether-card/whether-card.component';
import {WhetherService} from './services/whether.service';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    WhetherCardComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),HttpModule,FormsModule
  ],
  providers: [WhetherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
