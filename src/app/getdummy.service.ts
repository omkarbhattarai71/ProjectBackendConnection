import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Userdata} from "./userdata";
import {Userdetail} from "./userdetail";

@Injectable({
  providedIn: 'root'
})
export class GetdummyService {

  url1 = "https://reqres.in/api/users/2";
  url2 = "http://localhost:8090/api/1.2/getdummyuser";

  constructor(private httpClient: HttpClient) {}
    getData() {
      return this.httpClient.get<Userdata>(this.url1);
    }

    getOurData(){
    return this.httpClient.get<Userdetail>(this.url2);
    }

}
