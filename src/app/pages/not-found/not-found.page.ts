import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'kps-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage implements OnInit {
  ngOnInit() {
    document.title = '404';
  }
}
