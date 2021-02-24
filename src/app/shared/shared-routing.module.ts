import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from '../pages/intro/intro.component';

const routes: Routes = [
  { path: 'doctor', component: IntroComponent },
  { path: 'services', component: IntroComponent },
  { path: 'contact', component: IntroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
