using System;
using System.Collections.Generic;

#nullable disable

namespace Project1.Models
{
    public partial class Team
    {
        public Team()
        {
            Players = new HashSet<Player>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }
        public string ColorCamiseta { get; set; }

        public virtual ICollection<Player> Players { get; set; }
    }
}
