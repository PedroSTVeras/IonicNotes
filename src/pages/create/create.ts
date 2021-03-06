import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { Note } from '../../app/Note';
import { Events } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  note: Note;
  text: string;
  noteAux: Note;
  
  constructor(public alertCtrl: AlertController, navParams:NavParams, public navCtrl: NavController,public events: Events) {
    
    this.note = new Note('Note', '');
    this.note.icon = "add-circle";

    events.subscribe('note:edit', (p_note) => 
    {
      this.note = p_note;
    });
  }

  Save(p_note: Note) {
    if(p_note.icon == "add-circle"){
      p_note.modificationDate = new Date();
      this.events.publish('note:new', p_note);
    }
    this.events.publish('tab:clicked',{tab:1});
  }

  Delete(p_note: Note) {
    if(p_note.icon == "paper"){
      this.events.publish('note:delete', p_note);
      this.createNewNote();
    }
    this.events.publish('tab:clicked',{tab:1});
  }

  NoTitle() {
    let alert = this.alertCtrl.create({
      title: 'Your note needs a title',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }


    //Change to create tab
    createNewNote(){
      this.noteAux = new Note("Note",'');
      this.noteAux.icon = "add-circle";
      this.events.publish('note:edit', this.noteAux);
      this.events.publish('tab:clicked',{tab:0});
    }
}
