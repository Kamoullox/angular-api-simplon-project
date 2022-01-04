import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchOnApiService{

  // Observable
  subject = new Subject<string>();
  
  input = "Harry Potter";

  favorite: string[] = [];
  listTempo: any;

  private urlApi = `https://www.googleapis.com/books/v1/volumes?q=${this.input}&langrestrict=fr&maxResults=40`;

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    this.urlApi = `https://www.googleapis.com/books/v1/volumes?q=${this.input}&langrestrict=fr&maxResults=40`;
    return this.httpClient.get(this.urlApi);
  }

  public SendGetRequestAuthor(){
    this.urlApi = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${this.input}&langrestrict=fr&maxResults=40`;
    return this.httpClient.get(this.urlApi);
  }

  public getById(id: string){
    let url = `https://www.googleapis.com/books/v1/volumes/${id}`;
    console.log(url)
    return this.httpClient.get(url);
  }

  public setLocalStorage() {
    window.localStorage.setItem("favorite",`${this.favorite}`);
  }

  public getLocalStorage() {
    console.log(`Valeur de favorite dans getLocalStorage avant le getItem : `);
    console.log(this.favorite);
    // this.favorite.push("tamere")

    if (window.localStorage.getItem("favorite") != null){
      this.listTempo = window.localStorage.getItem("favorite")?.split(",");
      this.favorite =  this.listTempo;
    }
    console.log(`Valeur de favorite dans getLocalStorage apres le getItem : `);
    console.log(this.favorite);
  }

  public arrayRemove(value:string) { 
    return this.favorite.filter(function(ele:any){ 
        return ele != value; 
    });
}
}
