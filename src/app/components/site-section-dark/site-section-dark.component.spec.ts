import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSectionDarkComponent } from './site-section-dark.component';

describe('SiteSectionDarkComponent', () => {
  let component: SiteSectionDarkComponent;
  let fixture: ComponentFixture<SiteSectionDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSectionDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSectionDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
