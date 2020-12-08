import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { UsersService } from '../../../resources/users';
import { SearchService } from '../../../resources/search';

@Component({
  selector: 'kps-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage implements OnInit {
  constructor(
    readonly users: UsersService,
    readonly search: SearchService,
  ) { }

  ngOnInit() {
    document.title = 'Dashboard';
  }

  onSearch(v: string) {
    this.search.search({ filter: v });
  }
}
