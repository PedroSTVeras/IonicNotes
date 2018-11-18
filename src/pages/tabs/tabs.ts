import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { CreatePage } from '../create/create';
import { ListPage } from '../list/list';
import { ConfigPage } from '../config/config';

import { Events, Tabs } from 'ionic-angular';

import { Note } from '../../app/Note';
import { List } from '../../app/NoteList';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

    currentNote: Note;
    noteTitle: string;
    noteText: string;

    @ViewChild('myTabs') tabRef: Tabs;
    constructor(public navParams:NavParams, public events: Events) 
    {
        events.subscribe('tab:clicked', (data) => 
        {
            this.tabRef.select(data['tab']);
        });

        events.subscribe('note:edit', (p_note) => 
        {
            this.currentNote = p_note;
            this.noteTitle = this.currentNote.title;
            this.noteText = this.currentNote.text;
        });
    } 

    tab1Root = CreatePage;
    tab1Params = { note: this.currentNote };
    
    tab2Root = ListPage;
    tab2Params = { note: this.currentNote };

    tab3Root = ConfigPage;   
  
}
