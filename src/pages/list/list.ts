import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { NoteNameProvider } from '../../providers/note-name/note-name';
import { Note } from '../../app/Note';
import { List } from '../../app/NoteList';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  noteNum = 1;

  noteList: Observable<any>;
  noteAdd: Note;
  noteAux: Note;
  
  constructor(public navCtrl: NavController, private provider: NoteNameProvider,public events: Events) {
    this.noteList = this.provider.getAll();

    //this.notes = this.provider.getAll();

    //Create new note button
    //this.noteAdd = new Note('Note', '');
    //this.noteAdd.icon = "add-circle";

    //New note
    events.subscribe('note:new', (p_note) => 
    {
      this.noteAux = p_note;
      this.noteAux.icon = "paper";
      //this.noteList.Add(p_note);
      //this.noteNum++;

      this.noteAdd = new Note('Note', '');
      this.noteAdd.icon = "add-circle";
    });

    //Delete note
    events.subscribe('note:delete', (p_note) => 
    {
      //this.noteList.Delete(p_note);
    });    
  }

  //Loads selected note
  loadNote(p_note: any){
    this.noteAux = new Note(p_note.name,p_note.text);
    this.events.publish('note:edit', this.noteAux);
    this.events.publish('tab:clicked', {tab:0});
  }

  //Change to create tab
  createNewNote(){
    this.noteAux = new Note("New Note", '');
    this.noteAux.icon = "add-circle";
    this.events.publish('note:edit', this.noteAux);
    this.events.publish('tab:clicked',{tab:0});
  }


}
