using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YuGiOhEigenApiProjectViktorPera.DATAMODELS
{
    public class User
    {
        public int UserId { get; set; }
        public List<Deck> Decks { get; set; }
        public string Naam { get; set; }
    }
}
