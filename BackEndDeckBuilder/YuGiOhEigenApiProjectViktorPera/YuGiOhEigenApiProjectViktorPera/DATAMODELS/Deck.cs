using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YuGiOhEigenApiProjectViktorPera.DATAMODELS
{
    public class Deck
    {
        public string DeckNaam { get; set; }
        public int DeckId { get; set; }
        public int UserId { get; set; }
        public ICollection<CARD> Cards { get; set; }
        public User User { get; set; }
    }
}
