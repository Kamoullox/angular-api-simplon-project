import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  title!: string;
  urlImage!: string;
  author!: string;
  id!: string;


  ngOnInit(): void {
    const id= this.route.snapshot.params['id'];
    console.log(id);
  }

}
