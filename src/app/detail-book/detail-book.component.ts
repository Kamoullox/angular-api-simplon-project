import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchOnApiService } from '../services/search-on-api.service';


@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: SearchOnApiService) { }

  title!: string;
  urlImage!: string;
  author!: string;
  id!: string;
  book!: any;
  description!: string;
  rate!: number;
  publicationDate!: string;
  publisher!: string;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dataService.getById(id).subscribe((data) => {
      this.book = data;
      // this.book = this.book.items;
      this.title = this.book.volumeInfo.title;

      // Vérifie si une date de publication existe
      this.book.volumeInfo.publisher ? this.publisher = this.book.volumeInfo.publisher : this.publisher = "Pas d'éditeur, merci l'API Google ! 👍🏽";

      // Vérifie si un editeur existe
      this.book.volumeInfo.publishedDate ? this.publicationDate = this.book.volumeInfo.publishedDate : this.publicationDate = "Pas de date de publication, merci l'API Google ! 👍🏽";

      // Vérifie si une note existe
      this.book.volumeInfo.averageRating ? this.rate = this.book.volumeInfo.averageRating : this.rate = 0;

      this.book.volumeInfo.description ? this.description = this.book.volumeInfo.description : this.description = "Pas de description pour ce livre, merci l'API Google !	👍🏽";

      // Vérifie si une image existe dans le détail du bouquin
      this.book.volumeInfo.imageLinks ? this.urlImage = this.book.volumeInfo.imageLinks.thumbnail : this.urlImage = "../assets/noImage.jpg";

      // Vérifie si un auteur existe dans le détail du bouquin
      this.book.volumeInfo.authors ? this.author = this.book.volumeInfo.authors[0] : this.author = "";

    })

  }

}
