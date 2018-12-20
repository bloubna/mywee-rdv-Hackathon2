import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component'
import { AllDatesComponent } from './all-dates/all-dates.component'
import { FormComponent } from './form/form.component';



const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'alldate', component: AllDatesComponent },
  { path: 'form', component: FormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
