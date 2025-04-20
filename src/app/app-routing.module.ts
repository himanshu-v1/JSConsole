import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JSCComponent } from './jsc/jsc.component';
import { HomeComponent } from './home/home.component';
import { HtmlCComponent } from './html-c/html-c.component';

const routes: Routes = [
  { path: 'JSC', component: JSCComponent },
  { path: 'home', component: HomeComponent },
  { path: 'html', component: HtmlCComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
