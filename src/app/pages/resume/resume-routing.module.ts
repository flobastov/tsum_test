import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeEditComponent} from './resume-edit/resume-edit.component';
import {ResumeViewComponent} from './resume-view/resume-view.component';

const routes: Routes = [
  {path: 'resume', component: ResumeEditComponent},
  {path: 'resume/view', component: ResumeViewComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ResumeRoutingModule {
}
