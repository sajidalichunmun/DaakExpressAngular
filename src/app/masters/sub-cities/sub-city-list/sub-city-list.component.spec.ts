import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCityListComponent } from './sub-city-list.component';

describe('SubCityListComponent', () => {
  let component: SubCityListComponent;
  let fixture: ComponentFixture<SubCityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
