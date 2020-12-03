import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInPage } from './sign-in.page';

@NgModule({
  declarations: [SignInPage],
  imports: [
    CommonModule,
    SignInRoutingModule,
  ],
})
export class SignInModule { }
