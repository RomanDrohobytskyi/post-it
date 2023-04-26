import { Component, OnInit } from '@angular/core';
import {StickyNotesService} from "../service/sticky-note-service";
import {StickyNote} from "../model/sticky-note";

@Component({
  selector: 'app-sticky-notes-view',
  templateUrl: './sticky-notes-view.component.html',
  styleUrls: ['./sticky-notes-view.component.css']
})
export class StickyNotesViewComponent implements OnInit {

  stickyNotes: StickyNote[];

  constructor(private stickyNotesService: StickyNotesService) {
    this.stickyNotes = [];
  }

  ngOnInit(): void {
    this.initStickyNotes();
  }

  private initStickyNotes(): void {
    this.stickyNotesService.getAllStickyNotes().subscribe(stickyNotes => {
      this.stickyNotes = stickyNotes;
    });
  }

}
