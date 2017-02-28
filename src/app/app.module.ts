import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

//router
import { routing } from './app.routes';
import { AdminpagesModule } from './pages/admin/adminpages/adminpages.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    AdminpagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
