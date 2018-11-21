import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { Note } from '../../app/Note';
import { Events } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {

  noteAux: Note;
  
  constructor(public events: Events) {
    
  }

  //Change to create tab
  createNewNote(){
    this.noteAux = new Note("Note", '');
    this.noteAux.icon = "add-circle";
    this.events.publish('note:edit', this.noteAux);
    this.events.publish('tab:clicked',{tab:0});
  }

}
