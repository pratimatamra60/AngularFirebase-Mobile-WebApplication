import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { StatTableComponent } from './components/stat-table/stat-table.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { PostMessageComponent } from './components/post-message/post-message.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    NewsComponent,
    MatchListComponent,
    TeamListComponent,
    StatTableComponent,
    SettingsComponent,
    HomeComponent,
    LoginPageComponent,
    TeamDetailComponent,
    FavouriteComponent,
    GalleryComponent,
    RegisterComponent,
    PostMessageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,
    HttpModule,
    FormsModule

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
