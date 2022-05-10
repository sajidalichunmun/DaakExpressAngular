import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketsStatusComponent } from './packets-status.component';

describe('PacketsStatusComponent', () => {
  let component: PacketsStatusComponent;
  let fixture: ComponentFixture<PacketsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
