import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavPlayerComponent } from './nav-player/nav-player.component';


//import { NavMenuComponent } from 'src/app/nav-menu/nav-menu.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent, CreateComponent, EditComponent, NavPlayerComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlayersModule { }
