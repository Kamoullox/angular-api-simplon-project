import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchOnApiService {

  title = "Harry potter";

  private REST_API_SERVER = `https://www.googleapis.com/books/v1/volumes?q=${this.title}&langrestrict=fr`;

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
