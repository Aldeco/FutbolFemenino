import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { nameValidator } from '../../validators/name-validator';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  createForm;
  nameError: boolean;

  constructor(
    public teamsService: TeamsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required],
        asyncValidators: [nameValidator(this.teamsService)], updateOn: 'blur'
      }],
      colorCamiseta: ['', Validators.required],
    });
  }

  onSubmit(formData) {
    this.teamsService.createTeam(formData.value).subscribe(res => {
      this.router.navigateByUrl('teams/list');
    });
  }
}
