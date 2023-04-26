import {Component, Input} from '@angular/core';
import {StickyNote} from "../model/sticky-note";
import {StickyNotesService} from "../service/sticky-note-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-single-sticky-note',
  templateUrl: './single-sticky-note.component.html',
  styleUrls: ['./single-sticky-note.component.css']
})
export class SingleStickyNoteComponent {
  @Input() stickyNote: StickyNote;

  constructor(private stickyNotesService: StickyNotesService,
              private router: Router) {
  }

  delete(id: number): void {
    this.stickyNotesService.deleteStickyNote(id).subscribe(() => {
      this.navigateToStickyNotes();
    });
  }

  navigateToStickyNotes(): void {
    this.router.navigate(['/']);
  }
}
