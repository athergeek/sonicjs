import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private http: HttpClient
  ) { }

  async getContent() {
    return this.http.get(environment.apiUrl + "contents").toPromise();
  }

  public createContentInstance(payload) {
    console.log('createContentInstance payload', payload);
    let content:any = {};
    content.contentType = payload.contentType;
    content.name = payload[Object.keys(payload)[0]];;
    content.url = payload.url;
    content.content = payload;


    console.log('createContentInstance', content);
    return this.http.post(environment.apiUrl + "contents/", content).toPromise();
  }
}