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
  note1: Note;
  note2: Note;
  note3: Note;
  
  constructor(public navCtrl: NavController) {
    this.noteList = new List(navCtrl);
    this.note1 = new Note('nota1');

    this.noteList.Add(this.note1);


  }



}
