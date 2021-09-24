import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs/operators";
import { TeamsService } from "../teams/teams.service";



export function nameValidator(teams: TeamsService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return teams.getTeams()
            .pipe(map(teams => {
                const team = teams.find(team => team.nombre.toLowerCase() == control.value.toLowerCase());
                return team ? {teamExists: true} : null;
            }))
    }
}