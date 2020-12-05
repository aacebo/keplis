import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomePage } from './welcome.page';

@NgModule({
  declarations: [WelcomePage],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
  ],
})
export class WelcomeModule { }
