using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YuGiOhEigenApiProjectViktorPera.DATAMODELS;

namespace YuGiOhEigenApiProjectViktorPera.DBCONTEXT
{
    public class INITIALIZE_DB_STATIC_METHOD
    {
        public static void Initialize(YUGIOHCONTEXT context)
        {
            context.Database.EnsureCreated();

            if (!context.Decks.Any())
            {
                var NewDeck = new Deck()
                {
                    DeckNaam = "Blue eyes white dragon deck",
                    DeckId = 1,
                    UserId = 10,
                    //User = "Viktor"

                };
                context.Decks.Add(NewDeck);
                context.SaveChanges();
            }
        }
    }
}
