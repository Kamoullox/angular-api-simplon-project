import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { ListBooksCardsComponent } from './list-books-cards/list-books-cards.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { FormsModule } from '@angular/forms';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BooksLibraryComponent } from './books-library/books-library.component'; // <-- NgModel lives here




@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    ListBooksCardsComponent,
    SearchBarComponent,
    DetailBookComponent,
    HomeComponent,
    BooksLibraryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
