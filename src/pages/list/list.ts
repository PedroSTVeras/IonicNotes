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

  noteNum = 1;

  noteList: List;
  noteAdd: Note;
  noteAux: Note;
  
  constructor(public navCtrl: NavController,public events: Events) {
    this.noteList = new List(navCtrl);

    //Create new note button
    this.noteAdd = new Note('New Note', '');
    this.noteAdd.icon = "add-circle";

    //New note
    events.subscribe('note:new', (p_note) => 
    {
      this.noteAux = p_note;
      this.noteAux.icon = "paper";
      this.noteList.Add(p_note);
      this.noteNum++;

      this.noteAdd = new Note('New Note', '');
      this.noteAdd.icon = "add-circle";
    });

    //Delete note
    events.subscribe('note:delete', (p_note) => 
    {
      this.noteList.Delete(p_note);
    });    
  }

  //Loads selected note
  loadNote(p_note: Note){
    this.events.publish('note:edit', p_note);
    this.events.publish('tab:clicked', {tab:0});
  }

  //Change to create tab
  createNewNote(){
    this.noteAux = new Note("Note " + this.noteNum, '');
    this.noteAux.icon = "add-circle";
    this.events.publish('note:edit', this.noteAux);
    this.events.publish('tab:clicked',{tab:0});
  }


}
