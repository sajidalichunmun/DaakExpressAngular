import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketStatusListComponent } from './packet-status-list.component';

describe('PacketStatusListComponent', () => {
  let component: PacketStatusListComponent;
  let fixture: ComponentFixture<PacketStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketStatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
