import { Component } from '@angular/core';
import {GetdummyService} from "./getdummy.service";
import {Userdata} from "./userdata";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'connecting';
  email = "some@gmail.com";


  constructor(private getDummyService: GetdummyService){
  }

  showData(): void{
    this.getDummyService.getData().subscribe((resData) => this.email = resData.data.email);
  }

  showOurData(){
    this.getDummyService.getOurData().subscribe((resData) => this.email = resData.email);
  }
}
