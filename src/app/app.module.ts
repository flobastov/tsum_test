import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ResumeModule} from './pages/resume/resume.module';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import localeRu from '@angular/common/locales/ru';
import {ValidatorService} from './core/services/validator.service';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResumeModule,
    AppRoutingModule,
  ],
  providers: [
    ValidatorService,
    {provide: LOCALE_ID, useValue: 'ru'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
