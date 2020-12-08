import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../../../components/avatar';
import { SearchInputModule } from '../../../components/search-input';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,

    DashboardRoutingModule,
    AvatarModule,
    SearchInputModule,
  ],
})
export class DashboardModule { }
