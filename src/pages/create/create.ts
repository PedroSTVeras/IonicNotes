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
  text: string;

  constructor(navParams:NavParams, public navCtrl: NavController,public events: Events) {
    this.text = navParams.get('text');
    this.note = new Note(this.text);
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
