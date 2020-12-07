import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { UsersService } from './resources/users';

@Component({
  selector: 'kps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private readonly _users: UsersService) { }

  ngOnInit() {
    const token = localStorage.getItem('keplis:token');

    if (token) {
      this._users.token(token);
    }
  }
}
