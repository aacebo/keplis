import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import * as feathericons from 'feather-icons';

@Component({
  selector: 'kps-icon',
  template: ``,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
  @Input() name: string;

  @Input()
  get height() { return this._height; }
  set height(v) {
    this._height = coerceNumberProperty(v);
  }
  private _height = 20;

  @Input()
  get width() { return this._width; }
  set width(v) {
    this._width = coerceNumberProperty(v);
  }
  private _width = 20;

  @Input()
  get strokeWidth() { return this._strokeWidth; }
  set strokeWidth(v) {
    this._strokeWidth = coerceNumberProperty(v);
  }
  private _strokeWidth = 2;

  constructor(private readonly _el: ElementRef<HTMLElement>) { }

  ngOnChanges() {
    this._el.nativeElement.innerHTML = feathericons.icons[this.name].toSvg({
      style: 'margin-top: -3px;',
      width: this.width,
      height: this.height,
      'stroke-width': this.strokeWidth,
    });
  }
}
