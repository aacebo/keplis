import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IsAuthGuard } from './is-auth.guard';
import { NotAuthGuard } from './not-auth.guard';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  providers: [
    IsAuthGuard,
    NotAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule { }
