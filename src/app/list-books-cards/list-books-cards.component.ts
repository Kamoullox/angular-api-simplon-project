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
        console.log(`In listBooksComponent -> Change user incoming ! : ${v}`);
        console.log(`Valeur du title dans le service depuis le onInit -> ${this.dataService.input}`);
        this.getBooks();
      }
    });
  }
  
  getBooks(): void{
    console.log(`Valeur de book avant execution de getbooks -> ${this.books}`);
    // console.log(`valeur de l'url dans le getbooks ${this.dataService.urlApi}`)

      this.dataService.sendGetRequest().subscribe((data) => {
      this.books = data;
      this.books = this.books.items;
      
      console.log(data);
      // console.log(this.books);
    });

    console.log(`Valeur de book apres execution de getbooks -> ${this.books}`)
  }

}
