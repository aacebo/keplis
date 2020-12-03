import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kps-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage implements OnInit {
  readonly visible$ = new BehaviorSubject(false);

  form: FormGroup;

  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit() {
    document.title = 'Sign In';

    this.form = this._fb.group({
      username: this._fb.control(''),
      password: this._fb.control(''),
    });
  }
}
