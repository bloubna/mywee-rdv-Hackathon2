import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule  } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AllDatesComponent } from './all-dates/all-dates.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FormComponent,
    AllDatesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
