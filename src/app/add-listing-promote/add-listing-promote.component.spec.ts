import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListingPromoteComponent } from './add-listing-promote.component';

describe('AddListingPromoteComponent', () => {
  let component: AddListingPromoteComponent;
  let fixture: ComponentFixture<AddListingPromoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListingPromoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListingPromoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
