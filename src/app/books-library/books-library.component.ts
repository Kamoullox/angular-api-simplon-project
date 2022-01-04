import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { SearchOnApiService } from '../services/search-on-api.service';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss'],
})
export class BooksLibraryComponent implements OnInit {
  constructor(private dataService: SearchOnApiService) {}

  favoriteBooks: any = [];

  ngOnInit(): void {
    this.dataService.getLocalStorage();

    if (this.dataService.favorite)
      this.dataService.favorite.forEach((element: any) => {
        if (element != '') {
          this.dataService.getById(element).subscribe((data) => {
            this.favoriteBooks.push(data);
          });
        }
      });

    this.dataService.idBookToDelete.subscribe({
      next: (value) => {
        this.deleteBook(value);
      },
    });
  }

  public deleteBook(value: string) {
    let index = this.favoriteBooks.indexOf(value);
    if (index !== -1) {
      this.favoriteBooks.splice(index, 1);
    }
    console.log(this.favoriteBooks)
  }
}
