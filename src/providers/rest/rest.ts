import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
  console.log('Hello RestProvider Provider');
}
apiUrl = 'http://192.168.0.121:3012/';
dat = {};

getUsers() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl+'/users').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

addUser(data) {

  return new Promise((resolve, reject) => {

    let body =  JSON.stringify(data);
    this.dat["user"]=data;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(body);
    console.log(JSON.stringify(this.dat));
    console.log(headers);

    this.http.post(this.apiUrl+'/users',JSON.stringify(this.dat), {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
