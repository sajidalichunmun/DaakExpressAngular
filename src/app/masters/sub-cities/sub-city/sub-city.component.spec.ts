import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCityComponent } from './sub-city.component';

describe('SubCityComponent', () => {
  let component: SubCityComponent;
  let fixture: ComponentFixture<SubCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
