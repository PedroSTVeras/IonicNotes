import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { ConfigPage } from '../config/config';
import { CreatePage } from '../create/create';
import { EditPage } from '../edit/edit';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CreatePage;
  tab2Root = ListPage;
  tab3Root = ConfigPage;


  constructor() {

  }
}
