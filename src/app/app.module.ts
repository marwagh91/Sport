import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { SiteSectionDarkComponent } from './components/site-section-dark/site-section-dark.component';
import { SiteSectionComponent } from './components/site-section/site-section.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminMatchsComponent } from './components/admin-matchs/admin-matchs.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchComponent } from './components/match/match.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamComponent } from './components/team/team.component';
import { HttpClientModule } from "@angular/common/http";
import { MatchsDetailsComponent } from './components/matchs-details/matchs-details.component';
import { PlayersDetailsComponent } from './components/players-details/players-details.component';
import { TeamsDetailsComponent } from './components/teams-details/teams-details.component';
import { ContainerSectionComponent } from './components/container-section/container-section.component';
import { FiltrePipe } from './pipes/filtre.pipe';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    LoginComponent,
    SignupComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AddMatchComponent,
    MatchesComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    LatestNewsComponent,
    SiteSectionDarkComponent,
    SiteSectionComponent,
    AdminComponent,
    AdminMatchsComponent,
    AdminTeamsComponent,
    AdminPlayersComponent,
    TeamsComponent,
    PlayersComponent,
    MatchComponent,
    PlayerComponent,
    TeamComponent,
    MatchsDetailsComponent,
    PlayersDetailsComponent,
    TeamsDetailsComponent,
    ContainerSectionComponent,
    FiltrePipe,
    ReversePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
