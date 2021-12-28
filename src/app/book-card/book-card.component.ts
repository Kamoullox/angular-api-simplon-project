import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book!: any;

  title!: string;
  urlImage!: string;
  author!: string;


  constructor() { }

  ngOnInit(): void {
    // this.title = this.book.volumeInfo.title;
    // this.author = this.book.volumeInfo.authors[0];
    // this.urlImage = this.book.volumeInfo.imageLinks.thumbnail;
    console.log("Dans le Oninit");
    console.log(this.book.volumeInfo.title);
  }

}
