import { Component, OnInit } from '@angular/core';
import {StickyNote} from "../model/sticky-note";
import {StickyNotesService} from "../service/sticky-note-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sticky-notes-add',
  templateUrl: './add-sticky-note.component.html',
  styleUrls: ['./add-sticky-note.component.css']
})
export class AddStickyNoteComponent implements OnInit {
  stickyNote: StickyNote = new StickyNote();

  constructor(private stickyNoteService: StickyNotesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addStickyNote(): void {
    this.stickyNoteService.addStickyNote(this.stickyNote).subscribe(newNote => {
      this.stickyNote = newNote;
      this.navigateTStickyNotes();
    },
      error => console.log("Could not add note: " + this.stickyNote.content, error));
  }

  navigateTStickyNotes(): void {
    this.router.navigate(['/']);
  }

}
