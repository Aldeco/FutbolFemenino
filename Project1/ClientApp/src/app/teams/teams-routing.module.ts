import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { TeamListComponent } from './team-list/team-list.component';


const routes: Routes = [
  { path: 'teams', redirectTo: 'teams/index', pathMatch: 'full' },
  { path: 'teams/list', component: TeamListComponent },
  { path: 'teams/:teamId/details', component: DetailsComponent },
  { path: 'teams/create', component: CreateComponent }
  //{ path: 'teams/:teamId/edit', component: EditComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
