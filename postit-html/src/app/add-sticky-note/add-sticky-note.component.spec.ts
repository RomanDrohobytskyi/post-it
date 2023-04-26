import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStickyNoteComponent } from './add-sticky-note.component';

describe('StickyNotesAddComponent', () => {
  let component: AddStickyNoteComponent;
  let fixture: ComponentFixture<AddStickyNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStickyNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStickyNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
