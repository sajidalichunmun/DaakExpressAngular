import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackettypesComponent } from './packettypes.component';

describe('PackettypesComponent', () => {
  let component: PackettypesComponent;
  let fixture: ComponentFixture<PackettypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackettypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackettypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
