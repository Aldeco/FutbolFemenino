import { Component, OnInit } from '@angular/core';
import { Team } from "../team";
import { TeamsService } from "../teams.service";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [];

  constructor(public teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe((data: Team[]) => {
      this.teams = data;
    });
  }

  deleteTeam(id) {
    this.teamsService.deleteTeam(id).subscribe(res => {
      this.teams = this.teams.filter(item => item.id !== id);
    });
  }
}
