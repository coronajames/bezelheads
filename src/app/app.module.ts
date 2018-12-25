import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomeComponent } from './home/home.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { AddListingPromoteComponent } from './add-listing-promote/add-listing-promote.component';
import { ListingComponent } from './listing/listing.component';
import { ListingIndividualComponent } from './listing-individual/listing-individual.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { MyListingComponent } from './my-listing/my-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    ForgotPassComponent,
    HomeComponent,
    AddListingComponent,
    AddListingPromoteComponent,
    ListingComponent,
    ListingIndividualComponent,
    AccountSettingComponent,
    MyListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
