import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchOnApiService{

  // Observable
  subject = new Subject<string>();

  title = "pokemon";

  private urlApi = `https://www.googleapis.com/books/v1/volumes?q=${this.title}&langrestrict=fr&maxResults=40`;

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    this.urlApi = `https://www.googleapis.com/books/v1/volumes?q=${this.title}&langrestrict=fr&maxResults=40`;
    return this.httpClient.get(this.urlApi);
  }

  public getById(id: string){
    let url = `https://www.googleapis.com/books/v1/volumes/${id}&langrestrict=fr`;
    return this.httpClient.get(url);
  }

}
