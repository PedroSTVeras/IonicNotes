import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
 /*  noteList: List;
  note1: Note;
  note2: Note;
  note3: Note; */

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    /* this.noteList = new List();
    this.note1 = new Note('nota1');
    this.note2 = new Note('nota2');
    this.note3 = new Note('nota3');

    this.noteList.Add(this.note1);
    this.noteList.Add(this.note2);
    this.noteList.Add(this.note3);
    

    console.log('lista', this.noteList);
    console.log('nota2', this.noteList.Get('nota2')); */
  }


}
