import { Component, ViewChild } from '@angular/core';

import { CreatePage } from '../create/create';
import { ListPage } from '../list/list';
import { ConfigPage } from '../config/config';

import { Events, Tabs } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = CreatePage;
  tab2Root = ListPage;
  tab3Root = ConfigPage;


  @ViewChild('myTabs') tabRef: Tabs;
    constructor(public events: Events) 
    {
        events.subscribe('tab:clicked', (data) => 
        {
            this.tabRef.select(data['tab']);
        });
    }

  
}
