import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  opened: boolean = true;
  list: Array<string> = ["asdf"];
  blured = false
  focused = false
  title = 'note-app';
  content = "tesatsdfasdf";

  form: FormGroup = this.fb.group({
    note: new FormControl("form control test"),
  });

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private fb: FormBuilder) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  addNote() {
    this.list.push(this.form.get('note').value);
    this.form.setValue({'note': ' '});
  }

  getNewNote() {
    return this.form.get('note').value;
  }

}
