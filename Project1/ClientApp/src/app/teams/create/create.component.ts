import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm;
  nameError: boolean;

  constructor(
    public teamsService: TeamsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      colorCamiseta: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.nameError = false;
  }

  onSubmit(formData) {
    this.teamsService.createTeam(formData.value).subscribe(res => {
      this.router.navigateByUrl('teams/list');
    }, err => {
      this.nameError = true;
    });
  }
}
