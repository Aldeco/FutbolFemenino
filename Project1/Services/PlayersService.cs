using Microsoft.EntityFrameworkCore;
using Project1.Data;
using Project1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Services
{
    public class PlayersService : IPlayersService
    {
        private readonly DBFutbolContext _context;
        
        public PlayersService(DBFutbolContext context)
        {
            _context = context;
        }
        public async Task<Player> CreatePlayer(Player player)
        {
            _context.Players.Add(player);
            await _context.SaveChangesAsync();
            return player;
        }

        public async Task DeletePlayer(Player player)
        {
            _context.Players.Remove(player);
            await _context.SaveChangesAsync();
        }

        public async Task<Player> GetPlayerById(int id)
        {
            return await _context.Players.Include(x => x.Team)
            .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<Player>> GetPlayersList()
        {
            return await _context.Players.Include(x => x.Team).ToListAsync();
        }

        public async Task UpdatePlayer(Player player)
        {
            _context.Players.Update(player);
            await _context.SaveChangesAsync();
        }
    }
}

