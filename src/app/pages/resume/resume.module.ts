import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResumeRoutingModule} from './resume-routing.module';
import {ResumeViewComponent} from './resume-view/resume-view.component';
import {ResumeEditComponent} from './resume-edit/resume-edit.component';
import {ResumeService} from './resume.service';
import {ResumeMockService} from './resume-mock.service';
import {AppSharedModule} from '../../shared/app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppSharedModule,
    ResumeRoutingModule
  ],
  declarations: [
    ResumeViewComponent,
    ResumeEditComponent
  ],
  providers: [
    ResumeService,
    ResumeMockService
  ]
})
export class ResumeModule {
}
