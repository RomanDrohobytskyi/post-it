import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StickyNotesViewComponent} from "./sticky-notes-view/sticky-notes-view.component";

const routes: Routes = [
  {path: 'sticky-notes', component: StickyNotesViewComponent},
  {path: '', redirectTo: 'sticky-notes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
