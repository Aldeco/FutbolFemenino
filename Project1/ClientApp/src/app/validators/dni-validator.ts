import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs/operators";

import { PlayersService } from "../players/players.service";

export function dniValidator(players: PlayersService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return players.getPlayers()
            .pipe(map(players => {
                const player = players.find(player => player.dni == control.value);
                return player ? {dniExists: true} : null;
            }))
    }
}
