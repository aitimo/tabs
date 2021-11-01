import { Component } from '@angular/core';


import { HomePage } from '../home/home';
//import { AboutPage } from '../about/about';
//import { ListPage } from '../list/list';
//import { ChaptersPage } from '../chapters/chapters';
import { AuthPage } from '../auth/auth';
import { AuthFacebookPage } from '../authfacebook/authfacebook';
import { SearchPage } from '../search/search';
//import { TeamPage } from '../team/team';
import { ProfilePage } from '../profile/profile';
import { RequestPage } from '../request/request';



import { Observable } from "rxjs/Observable";

import { NotifyService } from "../../providers/notify";

@Component({
  templateUrl: 'tabs.html'
})


export class TabsPage {
	// this tells the tabs component which Pages
	// should be each tab's root Page
	//tab1Root: any = SurveyPage;
	tab2Root: any = HomePage;
	tab3Root: any = SearchPage;
//	tab3Root: any = ListPage; 
//	tab4Root: any = SyncPage;
	tab5Root: any = RequestPage;
	tab6Root: any = ProfilePage;
	tab7Root: any = AuthFacebookPage;
	
	newTasks: Observable<string>;

	// конструктор
	constructor(public notifyService: NotifyService) {

		
	}
	
	// инициировать
	ngOnInit(){
		// свзять слушателя
		this.newTasks = this.notifyService.listSize;
	}
}
