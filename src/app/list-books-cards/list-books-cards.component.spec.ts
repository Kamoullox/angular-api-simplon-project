import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksCardsComponent } from './list-books-cards.component';

describe('ListBooksCardsComponent', () => {
  let component: ListBooksCardsComponent;
  let fixture: ComponentFixture<ListBooksCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBooksCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBooksCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
