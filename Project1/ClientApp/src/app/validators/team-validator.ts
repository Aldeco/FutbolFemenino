import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs/operators";

import { PlayersService } from "../players/players.service";

export function teamValidator(players: PlayersService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return players.getPlayers()
            .pipe(map(players => {
                let count = 0;
                let full = false;
                count = players.filter(player => player.teamId == control.value).length;
                if(count >= 11) {
                    full = true;
                }
                return full ? {teamFull: true} : null;
            }))
    }
}
