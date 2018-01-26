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
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterComponent } from './components/register/register.component';

 const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'match-list', component: MatchListComponent },
  { path: 'team-list', component: TeamListComponent },
  { path: 'stat-table', component: StatTableComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'team-detail/:id', component: TeamDetailComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'gallery', component: GalleryComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);




