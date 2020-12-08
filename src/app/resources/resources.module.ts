import { NgModule } from '@angular/core';

import { SearchModule } from './search';
import { UsersModule } from './users';

@NgModule({
  imports: [
    UsersModule,
    SearchModule,
  ],
})
export class ResourcesModule { }
