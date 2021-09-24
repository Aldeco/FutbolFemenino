import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { dniValidator } from 'src/app/validators/dni-validator';
import { teamValidator } from 'src/app/validators/team-validator';
import { Team } from "../../teams/team";
import { TeamsService } from '../../teams/teams.service';
import { Player } from '../player';

import { PlayersService } from "../players.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  teams: Team[] = [];
  createForm;

  constructor(
    public playersService: PlayersService,
    public teamsService: TeamsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', {
        validators: [Validators.required],
        asyncValidators: [dniValidator(this.playersService)], updateOn: 'blur'
      }],
      teamId: ['', {
        validators: [Validators.required],
        asyncValidators: [teamValidator(this.playersService)], updateOn: 'blur'
      }],
    });
  }

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe((data: Team[]) => {
      this.teams = data;
    });
  }

  onSubmit(formData) {
    this.playersService.createPlayer(formData.value).subscribe(res => {
      this.router.navigateByUrl('players/list');
    }
    );
  }
}
