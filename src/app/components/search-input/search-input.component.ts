import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'kps-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  host: { class: 'kps-search-input form-inline' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input()
  get value() { return this._value; }
  set value(v) {
    if (v !== this._value) {
      this._value = v;
      this.valueChange.emit(v);
    }
  }
  private _value: string;

  @Output() valueChange = new EventEmitter<string>();

  readonly control = new FormControl();

  private readonly _destroy$ = new Subject<void>();

  ngOnInit() {
    this.control.setValue(this.value);
    this.control.valueChanges.pipe(
      takeUntil(this._destroy$),
      distinctUntilChanged(),
      debounceTime(500),
    ).subscribe(v => this.value = v);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
