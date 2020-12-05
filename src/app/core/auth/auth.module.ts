import { NgModule } from '@angular/core';

import { IsAuthGuard } from './is-auth.guard';
import { NotAuthGuard } from './not-auth.guard';

@NgModule({
  providers: [
    IsAuthGuard,
    NotAuthGuard,
  ],
})
export class AuthModule { }
