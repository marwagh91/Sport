import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMatchsComponent } from './admin-matchs.component';

describe('AdminMatchsComponent', () => {
  let component: AdminMatchsComponent;
  let fixture: ComponentFixture<AdminMatchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMatchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
