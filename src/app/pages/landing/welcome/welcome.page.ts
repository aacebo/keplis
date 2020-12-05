import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'kps-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomePage implements OnInit {
  ngOnInit() {
    document.title = 'Keplis: Welcome';
  }
}
