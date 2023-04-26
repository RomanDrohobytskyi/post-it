import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { StickyNotesViewComponent } from './sticky-notes-view/sticky-notes-view.component';
import { AddStickyNoteComponent } from './add-sticky-note/add-sticky-note.component';
import {HttpClientModule} from "@angular/common/http";
import { SingleStickyNoteComponent } from './single-sticky-note/single-sticky-note.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StickyNotesViewComponent,
    AddStickyNoteComponent,
    SingleStickyNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
