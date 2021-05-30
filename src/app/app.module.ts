import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './lazyLoading/students/students.component';
import { LazyLoadingComponent } from './lazyLoading/lazy-loading/lazy-loading.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    LazyLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
