import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelHomeComponent } from './marvel-home/marvel-home.component';

const routes: Routes = [
  { path: '', component: MarvelHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
