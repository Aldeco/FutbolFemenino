using Microsoft.AspNetCore.Mvc;
using Project1.Models;
using Project1.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Project1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamsController : ControllerBase
    {
        private readonly ITeamsService _teamService;

        public TeamsController(ITeamsService teamService)
        {
            _teamService = teamService;
        }

        [HttpGet]
        public async Task<IEnumerable<Team>> Get()
        {
            return await _teamService.GetTeamsList();
        }
        // GET: api/Teams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Team>> Get(int id)
        {
            var team = await _teamService.GetTeamByID(id);

            if (team == null)
            {
                return NotFound();
            }

            return Ok(team);
        }

        // POST: api/Teams
        [HttpPost]
        public async Task<ActionResult<Team>> Post(Team team)
        {
            if(await _teamService.CreateTeam(team) == null)
            {
                return BadRequest("El nombre debe ser unico.");
            }
            return CreatedAtAction("Post", new { id = team.Id }, team);
        }

        // PUT: api/Teams/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Team team)
        {
            if (id != team.Id)
            {
                return BadRequest("Not a valid team id");
            }

            await _teamService.UpdateTeam(team);

            return NoContent();
        }

        // DELETE: api/Teams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid team id");

            var team = await _teamService.GetTeamByID(id);
            if (team == null)
            {
                return NotFound();
            }

            await _teamService.DeleteTeam(team);

            return NoContent();
        }
    }
}
