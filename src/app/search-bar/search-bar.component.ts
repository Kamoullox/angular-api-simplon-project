import { Component, OnInit } from '@angular/core';
import { SearchOnApiService } from '../services/search-on-api.service';
import { Subject } from 'rxjs';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private dataService: SearchOnApiService, private router: Router) { }

  faSearch = faSearch;

  txt: string = ""

  ngOnInit(): void {
  }

  submitText(boolVerif:boolean = false) {
    console.log(boolVerif)
    let verif: string;
    if (boolVerif === false) {
      this.dataService.input = this.txt;
      this.dataService.subject.next("New Search send !");
      this.router.navigateByUrl(``);
    }
    else{
    this.dataService.input = this.txt;
    this.dataService.subject.next("author");
    this.router.navigateByUrl(``);
    }
  }

  onLibrary() {
    this.router.navigateByUrl(`library`);
  }

}
