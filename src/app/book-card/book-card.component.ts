import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';



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
  like = false;

  fasFaHeart = fasFaHeart;
  farFaHeart = farFaHeart;

  icone = farFaHeart;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = this.book.volumeInfo.title;

    // Vérifie si une image existe dans le détail du bouquin
    this.book.volumeInfo.imageLinks ? this.urlImage = this.book.volumeInfo.imageLinks.thumbnail : this.urlImage = "../assets/noImage.jpg";

    // Vérifie si un auteur existe dans le détail du bouquin
    this.book.volumeInfo.authors ? this.author = this.book.volumeInfo.authors[0] : this.author = "Pas d'auteur pour ce livre, merci l'API Google !	👍🏽";

    this.id = this.book.id
  }

  onContinue() {
    this.router.navigateByUrl(`detailBook/${this.id}`);
  }

  likeUnlike() {
    this.like = !this.like;
    this.icone = this.like ? fasFaHeart : farFaHeart;
  }

}
