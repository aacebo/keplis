import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { UsersService } from '../../resources/users';

@Component({
  selector: 'kps-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage implements OnInit {
  readonly visible$ = new BehaviorSubject(false);
  readonly production = environment.production;

  form: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _users: UsersService,
  ) { }

  ngOnInit() {
    document.title = 'Sign In';
    const email = localStorage.getItem('keplis:remember');

    this.form = this._fb.group({
      email: this._fb.control(email),
      password: this._fb.control(null),
      remember: this._fb.control(!!email),
    });
  }

  devLogin() {
    this._users.login('dev@dev.com');
  }

  login() {
    if (this.form.value.remember) {
      localStorage.setItem('keplis:remember', this.form.value.email);
    } else {
      localStorage.removeItem('keplis:remember');
    }

    this._users.login(this.form.value.email);
  }
}
