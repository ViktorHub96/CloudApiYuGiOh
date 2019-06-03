using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YuGiOhEigenApiProjectViktorPera.DATAMODELS
{
    public class CARD
    {
        public int CardId { get; set; }
        public int DeckId { get; set; }
        public Deck Deck { get; set; }
    }
}
