import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStickyNoteComponent } from './single-sticky-note.component';

describe('SingleStickyNoteComponent', () => {
  let component: SingleStickyNoteComponent;
  let fixture: ComponentFixture<SingleStickyNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStickyNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleStickyNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
