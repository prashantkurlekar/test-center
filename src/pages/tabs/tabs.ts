import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';

interface TabPage {
  title: string;
  icon: string;
  page: any;
}

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // set the root pages for each tab
  // public tab1Root: any = HomePage;
  // public tab2Root: any = AboutPage;
  // public tab2Root: any = Page1;
  // public tab3Root: any = Page2;
  // public tab4Root: any = SettingsPage;
  public tabPages: TabPage[] = [
    { title: 'Home', icon: 'home', page: HomePage },
    { title: 'About', icon: 'information-circle', page: AboutPage },
  ];

  public selectedIndex: number;

  constructor(navParams: NavParams) {
    console.debug(navParams);
    this.selectedIndex = navParams.data.tabIndex || 0;
  }

}
