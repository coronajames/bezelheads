import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: '', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forgotPass', component: ForgotPassComponent},
  { path: 'home', component: HomeComponent},
  { path: 'addListing', component: AddListingComponent},
  { path: 'addListingPromote', component: AddListingPromoteComponent},
  { path: 'listing', component: ListingComponent},
  { path: 'listingIndividual', component: ListingIndividualComponent},
  { path: 'accountSetting', component: AccountSettingComponent},
  { path: 'myListing', component: MyListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
