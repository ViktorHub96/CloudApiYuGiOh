using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YuGiOhEigenApiProjectViktorPera.DATAMODELS;
using YuGiOhEigenApiProjectViktorPera.DBCONTEXT;

namespace YuGiOhEigenApiProjectViktorPera.Controllers
{
    [Route("api/[controller]")]
    public class DECKCONTROLLER : Controller
    {
        public YUGIOHCONTEXT _context { get; set; }
        public DECKCONTROLLER(YUGIOHCONTEXT ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        //LIJST OPVRAGEN
        
        public List<Deck> GetDecks(string decknaam, int? page, int length = 9999, string sort= "", string dir ="asc")
        {
            IQueryable<Deck> query = _context.Decks;

            if (!string.IsNullOrWhiteSpace(decknaam))
                query = query.Where(d => d.DeckNaam == decknaam);
            //return _context.Decks.ToList();
            //<LIJST> _CONTEXT.tolist() lijst krijgen

            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);
            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "decknaam":
                        if (dir == "asc")
                        {
                            query = query.OrderBy(d => d.DeckNaam);
                        }
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.DeckNaam);
                        break;
                }
            }

            return query.ToList();
        }
        [Route("{id}")]
        [HttpGet]
        //RESOURCE KUNNEN AANVRAGEN VIA EEN ID
        public ActionResult<Deck> GetDeckById(int id)
        {
            var TheDeck = _context.Decks.Include(b => b.User)
                                         .SingleOrDefault(b => b.DeckId == id);
            if (TheDeck == null)
                return NotFound();

            return TheDeck;
            //constructor ID MEEGEVEN // NIEUWE OBJECT = CONTEXT.LIJST.Zoek/Find.(id) ALS DE AUTHOR NULL IS ERROR GEVEN ANDERS OK
        }
        [HttpDelete]
        //RESOURCE KUNNEN DELETEN
        public IActionResult DeleteDeck(int id)
        {
            var theBook = _context.Decks.Find(id);
            if (theBook == null)
                return NotFound();

            _context.Decks.Remove(theBook);
            _context.SaveChanges();             
            return NoContent();
        }
        [HttpPut]
        // RESOURCE KUNNEN AANPASSEN
        public ActionResult<Deck> AddDeck([FromBody]Deck deck)
        {
            _context.Decks.Update(deck);
            _context.SaveChanges();
            //DECK RETURNEN MET ID 
            return Created("", deck);
        }
        [HttpPost]
        // RESOURCE KUNNEN AANMAKEN
        public ActionResult<Deck> UpdateDeck([FromBody]Deck deck)
        {
            
            _context.Decks.Add(deck);
            _context.SaveChanges();
            //ID RETURN
            return Created("", deck);
        }
    }
}