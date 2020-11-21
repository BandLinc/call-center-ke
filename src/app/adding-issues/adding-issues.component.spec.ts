import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingIssuesComponent } from './adding-issues.component';

describe('AddingIssuesComponent', () => {
  let component: AddingIssuesComponent;
  let fixture: ComponentFixture<AddingIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
