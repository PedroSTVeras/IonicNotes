import { Component } from '@angular/core';

import { Note } from '../../app/Note';
import { List } from '../../app/List';
import { CreatePage } from '../create/create';
import { NavController } from 'ionic-angular';

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
    this.note2 = new Note('nota2');

    this.note3 = new Note('nota3');

    this.noteList.Add(this.note1);
    this.noteList.Add(this.note2);
    this.noteList.Add(this.note3);

    //let a = 5;
    //console.log(a);

  }



}
