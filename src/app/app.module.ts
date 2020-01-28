import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NavbarCmpComponent } from './navbar-cmp/navbar-cmp.component';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NavbarCmpComponent,
    HomeCmpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
