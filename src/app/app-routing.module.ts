import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { HomeComponent } from './home/home.component';
import { BooksLibraryComponent } from './books-library/books-library.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detailBook/:id', component: DetailBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
