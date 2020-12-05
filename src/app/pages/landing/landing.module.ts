import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPage } from './landing.page';

@NgModule({
  declarations: [LandingPage],
  imports: [
    CommonModule,
    LandingRoutingModule,
  ],
})
export class LandingModule { }
