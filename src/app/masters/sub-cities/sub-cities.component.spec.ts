import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCitiesComponent } from './sub-cities.component';

describe('SubCitiesComponent', () => {
  let component: SubCitiesComponent;
  let fixture: ComponentFixture<SubCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
