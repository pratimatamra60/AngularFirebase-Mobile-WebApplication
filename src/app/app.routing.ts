import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { StatTableComponent } from './components/stat-table/stat-table.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

 const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'match-list', component: MatchListComponent },
  { path: 'team-list', component: TeamListComponent },
  { path: 'stat-table', component: StatTableComponent },
  { path: 'settings', component: SettingsComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);




