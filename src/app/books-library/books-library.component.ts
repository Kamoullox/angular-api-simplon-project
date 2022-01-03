import { Component, OnInit } from '@angular/core';
import { SearchOnApiService } from '../services/search-on-api.service';


@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss']
})
export class BooksLibraryComponent implements OnInit {

  constructor(private dataService: SearchOnApiService) {}

  favoriteBooks:any = [];
  idArray:any = [];

  ngOnInit(): void {
    this.idArray=this.dataService.getLocalStorage();
    console.log((this.idArray));
    this.idArray = this.idArray.split(",");
    this.idArray.forEach((element:any) => {
      this.dataService.getById(element).subscribe((data) => {
        this.favoriteBooks.push(data);
        console.log(this.favoriteBooks)
      });
    });
  }

}
