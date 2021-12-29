import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SearchOnApiService } from '../services/search-on-api.service';


@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: SearchOnApiService) {  }

  title!: string;
  urlImage!: string;
  author!: string;
  id!: string; 
  book!: any;
  description!: string;

  ngOnInit(): void {
    const id= this.route.snapshot.params['id'];
    this.dataService.getById(id).subscribe((data) => {
      this.book = data;
      // this.book = this.book.items;
      
      console.log(data);
      // console.log(this.books);
      console.log(this.book);

      this.title = this.book.volumeInfo.title;

      this.book.volumeInfo.description ? this.description = this.book.volumeInfo.description : this.description = "";
  
      // Vérifie si une image existe dans le détail du bouquin
      this.book.volumeInfo.imageLinks ? this.urlImage = this.book.volumeInfo.imageLinks.thumbnail : this.urlImage = "../../assets/noImage.jpg";
  
      // Vérifie si un auteur existe dans le détail du bouquin
      this.book.volumeInfo.authors ? this.author = this.book.volumeInfo.authors[0] : this.author = "";
  
    })


  }

}
