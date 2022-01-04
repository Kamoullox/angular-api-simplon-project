import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchOnApiService {

  // Observable
  subject = new Subject<string>();
  idBookToDelete = new Subject<string>();

  input = 'Harry Potter';

  favorite: string[] = [];
  listTempo: any;

  private urlApi = `https://www.googleapis.com/books/v1/volumes?q=${this.input}&langrestrict=fr&maxResults=40`;

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    this.urlApi = `https://www.googleapis.com/books/v1/volumes?q=${this.input}&langrestrict=fr&maxResults=40`;
    return this.httpClient.get(this.urlApi);
  }

  public SendGetRequestAuthor() {
    this.urlApi = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${this.input}&langrestrict=fr&maxResults=40`;
    return this.httpClient.get(this.urlApi);
  }

  public getById(id: string) {
    let url = `https://www.googleapis.com/books/v1/volumes/${id}`;
    return this.httpClient.get(url);
  }

  public setLocalStorage() {
    window.localStorage.setItem('favorite', `${this.favorite}`);
  }

  public getLocalStorage() {
    if (window.localStorage.getItem('favorite') != null) {
      this.listTempo = window.localStorage.getItem('favorite')?.split(',');
      this.favorite = this.listTempo;
    }
  }

  public arrayRemove(value: string) {
    return this.favorite.filter(function (element: any) {
      return element != value;
    });
  }
}