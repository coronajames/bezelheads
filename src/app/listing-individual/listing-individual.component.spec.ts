import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingIndividualComponent } from './listing-individual.component';

describe('ListingIndividualComponent', () => {
  let component: ListingIndividualComponent;
  let fixture: ComponentFixture<ListingIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
