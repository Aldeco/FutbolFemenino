import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from "../team";
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  team: Team;
  editForm;

  constructor(
    public teamsService: TeamsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      colorCamiseta: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['teamId'];
    this.teamsService.getTeam(this.id).subscribe((data: Team) => {
      this.team = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData) {
    this.teamsService.updateTeam(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('teams/list');
    });
  }
}
