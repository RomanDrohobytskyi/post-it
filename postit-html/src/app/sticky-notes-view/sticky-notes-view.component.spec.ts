import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNotesViewComponent } from './sticky-notes-view.component';

describe('StickyNotesViewComponent', () => {
  let component: StickyNotesViewComponent;
  let fixture: ComponentFixture<StickyNotesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNotesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNotesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
