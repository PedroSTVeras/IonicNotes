import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Note } from '../../app/Note';
import { List } from '../../app/NoteList';
import { CreatePage } from '../create/create';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  noteList: List;
  noteAux: Note;
  
  constructor(public navCtrl: NavController) {
    this.noteList = new List(navCtrl);

    this.noteAux = new Note('New Note');
    this.noteAux.icon = "add-circle";
    this.noteList.Add(this.noteAux);


  }



}
