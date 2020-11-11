import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { StorageModule } from '@ngx-pwa/local-storage';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeItemComponent } from './register/employee-item/employee-item.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {AppRoutingModule } from './app-routing.module';
import { EmployeeDetailsComponent } from './register/employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmployeeItemComponent,
    HomeComponent,
    PagenotfoundComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StorageModule.forRoot({
      IDBNoWrap: true,
    }),
    //RouterModule.forRoot(appRoutes)
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
