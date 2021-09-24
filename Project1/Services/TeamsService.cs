using Microsoft.EntityFrameworkCore;
using Project1.Data;
using Project1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Services
{
    public class TeamsService : ITeamsService
    {
        private readonly DBFutbolContext _context;

        public TeamsService(DBFutbolContext context)
        {
            _context = context;
        }
        public async Task<Team> CreateTeam(Team team)
        {
            Team existingTeam = await _context.Teams.Where(t => t.Nombre == team.Nombre).FirstOrDefaultAsync();
            if (existingTeam != null)
            {
                return null;
            }
            _context.Teams.Add(team);
            await _context.SaveChangesAsync();
            return team;
        }

        public async Task DeleteTeam(Team team)
        {
            var inTeam = await _context.Players.Where(p => p.TeamId == team.Id).ToListAsync();
            foreach(var player in inTeam)
            {
                player.TeamId = null;
            }
            _context.Teams.Remove(team);
            await _context.SaveChangesAsync();
        }

        public async Task<Team> GetTeamByID(int id)
        {
            return await _context.Teams
            .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<Team>> GetTeamsList()
        {
            return await _context.Teams.ToListAsync();
        }

        public async Task UpdateTeam(Team team)
        {
            _context.Teams.Update(team);
            await _context.SaveChangesAsync();
        }
    }
}
