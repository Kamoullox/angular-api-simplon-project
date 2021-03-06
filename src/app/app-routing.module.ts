import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksLibraryComponent } from './books-library/books-library.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detailBook/:id', component: DetailBookComponent},
  {path: 'library', component:BooksLibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
