import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Note } from '../../app/Note';
import { List } from '../../app/NoteList';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

  note: Note;

  constructor(public navCtrl: NavController) {
    //this.title = document.getElementById("noteTitle");

    this.Save();
  }

  New() {
    //this.note = new Note();
  }

  Save() {
   
    //this.note.title =
    //this.note.text =


    console.log("salvou");
  }

}
