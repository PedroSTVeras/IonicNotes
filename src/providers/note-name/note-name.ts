import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class NoteNameProvider {
  private PATH = 'Note/';
  currentDate : Date;
  constructor(private db: AngularFireDatabase) {
  }
 
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
 
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  save(note: any) { 
    this.currentDate = new Date();
    return new Promise((resolve, reject) => {
      if (note.key) {
        this.db.list(this.PATH)
        .update(note.key, { name: note.name, text: note.text, date: this.currentDate.toString() })
        .then(() => resolve())
        .catch((e) => reject(e));

      } else {
        this.db.list(this.PATH)
        .push({ name: note.name, text: note.text, date: this.currentDate.toString() })
        .then(() => resolve());
      }
    });
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}