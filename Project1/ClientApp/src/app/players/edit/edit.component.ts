import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from "../../teams/team";
import { TeamsService } from '../../teams/teams.service';
import { Player } from '../player';

import { PlayersService } from "../players.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  player: Player;
  teams: Team[] = [];
  editForm;

  constructor(
    public playersService: PlayersService,
    public teamsService: TeamsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      teamId: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['playerId'];
    this.teamsService.getTeams().subscribe((data: Team[]) => {
      this.teams = data;
    });
    this.playersService.getPlayer(this.id).subscribe((data: Player) => {
      this.player = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData) {
    this.playersService.updatePlayer(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('players/list');
    });
  }
}
