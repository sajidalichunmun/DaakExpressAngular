import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationListComponent } from './relation-list.component';

describe('RelationListComponent', () => {
  let component: RelationListComponent;
  let fixture: ComponentFixture<RelationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
