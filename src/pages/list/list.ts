import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { Note } from '../../app/Note';
import { List } from '../../app/NoteList';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  noteList: List;
  noteAdd: Note;
  noteAux: Note;
  
  constructor(public navCtrl: NavController,public events: Events) {
    this.noteList = new List(navCtrl);

    //Create new note button
    this.noteAdd = new Note('New Note');
    this.noteAdd.icon = "add-circle";

    //Create example note
    this.noteAux = new Note('To Do');
    this.noteAux.text = "- Make notes" 
    this.noteList.Add(this.noteAux);
  }

  //Loads selected note
  loadNote(p_note: Note){
    this.events.publish('note:created', p_note);
    this.events.publish('tab:clicked', {tab:0});
  }

  //Change to create tab
  goToCreate(){
    this.events.publish('tab:clicked',{tab:0});
  }


}
