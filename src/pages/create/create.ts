import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { Note } from '../../app/Note';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  note: Note;
  constructor(public navCtrl: NavController,public events: Events) {
    this.note = new Note("");
  }

  Load(){
    this.events.subscribe('note:created', (p_note) => {
      this.note = p_note;
    });
  }

  Save() {
    this.events.publish('tab:clicked',{tab:1});

  }

}
