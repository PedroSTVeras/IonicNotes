import { Component } from '@angular/core';
import { NavController,NavParams,ToastController } from 'ionic-angular';

import { Note } from '../../app/Note';
import { Events } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { NoteNameProvider } from '../../providers/note-name/note-name';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  note: Note;
  text: string;
  noteAux: Note;
  
  form: FormGroup;

  constructor(private toast: ToastController,private formBuilder: FormBuilder,private provider: NoteNameProvider,public alertCtrl: AlertController, navParams:NavParams, public navCtrl: NavController,public events: Events) {
    
    this.note = new Note('Note', '');
    this.note.icon = "add-circle";

    events.subscribe('note:edit', (p_note) => 
    {
      this.note = p_note;
    });

    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.note.key],
      title: [this.note.title, Validators.required],
      text: [this.note.text, Validators.required],
      date: [this.note.modificationDate],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }


  Save(p_note: Note) {
    if(p_note.icon == "add-circle"){
      p_note.modificationDate = new Date();
      this.events.publish('note:new', p_note);
      this.onSubmit();
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
