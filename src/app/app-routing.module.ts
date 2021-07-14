import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchsDetailsComponent } from './components/matchs-details/matchs-details.component';
import { PlayersDetailsComponent } from './components/players-details/players-details.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamsDetailsComponent } from './components/teams-details/teams-details.component';
import { TeamsComponent } from './components/teams/teams.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add-team',component:AddTeamComponent},
  {path:'edit-teams/:id',component:AddTeamComponent},

{path:'add-player',component:AddPlayerComponent},
{path:'edit-players/:id',component:AddPlayerComponent},

{path:'add-match',component:AddMatchComponent},
{path:'edit-matchs/:id',component:AddMatchComponent},

{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'admin',component:AdminComponent},
{path:'matchs',component:MatchesComponent},

{path:'matchs-details/:id',component:MatchsDetailsComponent},
{path:'players',component:PlayersComponent},
{path:'players-details/:id',component:PlayersDetailsComponent},

{path:'signupAdmin',component:SignupComponent},

{path:'teams',component:TeamsComponent},
{path:'teams-details/:id',component:TeamsDetailsComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
