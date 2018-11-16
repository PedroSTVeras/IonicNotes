import { Component,ViewChild } from '@angular/core';
import { NavController,Content } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { Note } from '../../app/Note';
import { List } from '../../app/NoteList';
import { CreatePage } from '../create/create';

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

    this.noteAdd = new Note('New Note');
    this.noteAdd.icon = "add-circle";

    this.noteAux = new Note('To Do');
    this.noteList.Add(this.noteAux);
  }

  goToCreate(){
    this.events.publish('tab:clicked',{tab:0});
  }

}
