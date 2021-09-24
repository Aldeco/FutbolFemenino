import { Team } from "../teams/team";

export interface Player {
  id: number;
  nombre: string;
  apellido: string;
  dni: number;
  teamId?: number;
  team?: Team;
}
