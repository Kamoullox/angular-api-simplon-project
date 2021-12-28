import { Component, OnInit } from '@angular/core';
import { SearchOnApiService } from '../services/search-on-api.service';

@Component({
  selector: 'app-list-books-cards',
  templateUrl: './list-books-cards.component.html',
  styleUrls: ['./list-books-cards.component.scss'],
})
export class ListBooksCardsComponent implements OnInit {
  books: any = [];

  constructor(private dataService: SearchOnApiService) {}

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data) => {
      this.books = data;
      this.books = this.books.items;
      
      console.log(data);
      console.log(this.books);
    });
  }
}
