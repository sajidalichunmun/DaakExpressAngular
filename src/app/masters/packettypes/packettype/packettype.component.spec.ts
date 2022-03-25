import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackettypeComponent } from './packettype.component';

describe('PackettypeComponent', () => {
  let component: PackettypeComponent;
  let fixture: ComponentFixture<PackettypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackettypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
