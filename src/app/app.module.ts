import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { SigninComponent } from './pages/signin/signin.component';
import { WorkComponent } from './pages/work/work.component';
import { DetailsComponent } from './pages/details/details.component';
import { AgreementComponent } from './pages/agreement/agreement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    LoadingComponent,
    ConfirmComponent,
    SigninComponent,
    WorkComponent,
    DetailsComponent,
    AgreementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
