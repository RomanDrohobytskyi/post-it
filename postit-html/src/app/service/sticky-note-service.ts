import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StickyNote} from "../model/sticky-note";

@Injectable({
  providedIn: 'root'
})
export class StickyNotesService {

  private baseURL = 'http://localhost:8080/stickyNotes';

  constructor(private httpClient: HttpClient) { }

  getAllStickyNotes(): Observable<StickyNote[]> {
    return this.httpClient.get<StickyNote[]>(`${this.baseURL}/all`);
  }

  addStickyNote(stickyNote: StickyNote): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/add`, stickyNote);
  }

  deleteStickyNote(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }

  updateStickyNote(stickyNote: StickyNote): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/update`, stickyNote);
  }

}
