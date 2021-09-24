using Project1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Services
{
    public interface ITeamsService
    {
        Task<IEnumerable<Team>> GetTeamsList();
        Task<Team> CreateTeam(Team team);
        Task<Team> GetTeamByID(int id);
        Task UpdateTeam(Team team);
        Task DeleteTeam(Team team);
    }
}
