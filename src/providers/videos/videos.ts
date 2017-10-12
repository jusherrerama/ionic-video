import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
/*

/*
  Generated class for the VideosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VideosProvider {

  apiUrl = 'http://192.168.0.121:4000/';
  dat = {};
  constructor(public http: HttpClient) {
    console.log('Hello VideosProvider Provider');
  }
  getVideos() {
      return new Promise(resolve => {
      this.http.get(this.apiUrl+'/videos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addVideo(data,file) {
    const req = new HttpRequest('POST', this.apiUrl+'/videos', file, {
      reportProgress: true,
      });
  }



}
