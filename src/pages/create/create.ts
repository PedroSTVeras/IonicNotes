import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Note } from '../../app/Note';
import { List } from '../../app/NoteList';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  note: Note;
  listPage: ListPage;

  constructor(public navCtrl: NavController) {
    //this.title = document.getElementById("noteTitle");
    this.note = new Note("Teste");
  }

  New() {
    //this.note = new Note();
  }

  Save() {

    //this.note.title =
    console.log(this.note);


    console.log("salvou");
    //noteList.Add(this.note)
  }

}
