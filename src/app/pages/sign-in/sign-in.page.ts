import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'kps-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage implements OnInit {
  ngOnInit() {
    document.title = 'Sign In';
  }
}
