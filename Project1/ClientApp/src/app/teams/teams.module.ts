import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavTeamsComponent } from './nav-teams/nav-teams.component';

@NgModule({
  declarations: [TeamListComponent, DetailsComponent, CreateComponent, EditComponent, NavTeamsComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeamsModule { }
