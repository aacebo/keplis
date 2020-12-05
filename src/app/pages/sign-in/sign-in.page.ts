import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';

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

  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit() {
    document.title = 'Sign In';
    const username = localStorage.getItem('keplis:remember');

    this.form = this._fb.group({
      username: this._fb.control(username),
      password: this._fb.control(null),
      remember: this._fb.control(!!username),
    });
  }

  submit() {
    if (this.form.value.remember) {
      localStorage.setItem('keplis:remember', this.form.value.username);
    } else {
      localStorage.removeItem('keplis:remember');
    }
  }
}
