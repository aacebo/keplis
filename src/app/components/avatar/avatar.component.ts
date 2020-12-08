import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kps-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  host: { '[class.kps-avatar--clickable]': 'clickable' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() src: string;
  @Input() alt: string;

  @Input()
  get clickable() { return this._clickable; }
  set clickable(v) {
    this._clickable = coerceBooleanProperty(v);
  }
  private _clickable = false;

  readonly error$ = new BehaviorSubject(false);
}
