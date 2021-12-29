import { Component, OnInit } from '@angular/core';
import { SearchOnApiService } from '../services/search-on-api.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private dataService: SearchOnApiService) { }

  txt: string = ""

  ngOnInit(): void {
  }

  submitText() {
    console.log("dans le submit txt")
    this.dataService.title = this.txt;
    this.dataService.subject.next("New Search send !");
  }

}
