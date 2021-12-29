import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


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
  id!: string;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = this.book.volumeInfo.title;

    // Vérifie si une image existe dans le détail du bouquin
    this.book.volumeInfo.imageLinks ? this.urlImage = this.book.volumeInfo.imageLinks.thumbnail : this.urlImage = "../assets/noImage.jpg";

    // Vérifie si un auteur existe dans le détail du bouquin
    this.book.volumeInfo.authors ? this.author = this.book.volumeInfo.authors[0] : this.author = "";

    this.id = this.book.id
  }

  onContinue() {
    this.router.navigateByUrl(`detailBook/${this.id}`);
  }

}
