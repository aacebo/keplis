
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './users.state';
import * as effects from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([
      effects.LoginEffects,
      effects.TokenEffects,
    ]),
  ],
})
export class UsersModule { }
