import { Component, OnInit } from '@angular/core';
import { SearchOnApiService } from '../services/search-on-api.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-list-books-cards',
  templateUrl: './list-books-cards.component.html',
  styleUrls: ['./list-books-cards.component.scss'],
})
export class ListBooksCardsComponent implements OnInit {

  constructor(private dataService: SearchOnApiService) {}

  books: any = [];

  ngOnInit(): void {
    this.getBooks();
    
    this.dataService.subject.subscribe({
      next: (v) => {
        console.log(v);
        if (v === "author"){
        this.getBooks(v);
        }
        else {
          this.getBooks();
        }
      }
    });
  }
  
  getBooks(recup?: string): void{
      if (recup){
        this.dataService.SendGetRequestAuthor().subscribe((data) => {
          this.books = data;
          this.books = this.books.items;
        });
      }
      else {
      this.dataService.sendGetRequest().subscribe((data) => {
      this.books = data;
      this.books = this.books.items;
      });
    }
  }
}
