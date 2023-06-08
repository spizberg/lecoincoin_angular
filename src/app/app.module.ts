import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SaleadListComponent } from './salead-list/salead-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaleadDetailComponent } from './salead-detail/salead-detail.component';
//import { SaleadEditComponent } from './salead-edit/salead-edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SaleadAddComponent } from './salead-add/salead-add.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SaleadListComponent,
    SaleadDetailComponent,
    //SaleadEditComponent,
    HeaderComponent,
    FooterComponent,
    SaleadAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    PaginationConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
