import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Note } from 'src/models/note';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  notes: Array<Note> = new Array<Note>();
  opened: boolean = true;
  blured = false
  focused = false
  sidebar = true;
  title = 'note-app';
  content = "tesatsdfasdf";
  selectedItem: number = 0;


  form: FormGroup = this.fb.group({
    note: new FormControl("new form notes.."),
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
    let note = this.form.get('note').value;
    if(note.length > 1) {
      this.notes.push({note: note,timeStamp: moment().format("ddd, h:mm A")});
      this.form.setValue({'note': ' '});
    }
  }

  editNote() {
    let note = this.form.get('note').value;
    if(note.length > 1) {
      this.notes[this.selectedItem].note =  note;
      this.notes[this.selectedItem].timeStamp = moment().format("ddd, h:mm A");
    }
  }

  setNote() {
     this.form.setValue({'note':this.notes[this.selectedItem].note});
     this.notes[this.selectedItem].timeStamp = moment().format("ddd, h:mm A");
  }

  getNewNote() {
    return this.form.get('note').value;
  }

  noteClick(index,event) {
    this.selectedItem = index;
    this.form.setValue({'note': this.notes[this.selectedItem].note});
    this.notes[this.selectedItem].timeStamp = moment().format("ddd, h:mm A");
  }

  noteDelete(){
    this.notes.splice(this.selectedItem,1);
  }

}
