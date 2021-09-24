import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../players/player';
import { PlayersService } from '../../players/players.service';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  team: Team;
  players: Player[] = [];

  constructor(
    public teamsService: TeamsService,
    public playersService: PlayersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['teamId'];
    this.teamsService.getTeam(this.id).subscribe((data: Team) => {
      this.team = data;
    });
    this.playersService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
    });
  }
}
