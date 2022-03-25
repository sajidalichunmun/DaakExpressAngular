import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackettypelistComponent } from './packettypelist.component';

describe('PackettypelistComponent', () => {
  let component: PackettypelistComponent;
  let fixture: ComponentFixture<PackettypelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackettypelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackettypelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
