import {NgModule} from '@angular/core';
import {
  MAT_DATE_LOCALE, MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule, MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {CounterDirective} from './directives/counter.directive';
import {CyrillicDirective} from './directives/cyrillic.directive';

@NgModule({
  declarations: [CounterDirective, CyrillicDirective],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'}
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    CounterDirective,
    CyrillicDirective
  ],
})
export class AppSharedModule {
}
