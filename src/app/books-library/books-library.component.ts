import { Component, OnInit } from '@angular/core';
import { SearchOnApiService } from '../services/search-on-api.service';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss']
})
export class BooksLibraryComponent implements OnInit {

  constructor(private dataService: SearchOnApiService) { 
    
  }

  ngOnInit(): void {
  }

}
