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
    public class UserC : Controller
    {
        public YUGIOHCONTEXT _context { get; set; }
        public UserC(YUGIOHCONTEXT ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        //LIJST OPVRAGEN

        public List<User> GetUsers(string naam, int? page, int length = 9999, string sort = "", string dir = "asc")
        {
            IQueryable<User> query = _context.Users;

            if (!string.IsNullOrWhiteSpace(naam))
                query = query.Where(d => d.Naam == naam);
            //return _context.Users.ToList();
            //<LIJST> _CONTEXT.tolist() lijst krijgen

            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);
            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "Usernaam":
                        if (dir == "asc")
                        {
                            query = query.OrderBy(d => d.Naam);
                        }
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.Naam);
                        break;
                }
            }

            return query.ToList();
        }
        [Route("{id}")]
        [HttpGet]
        //RESOURCE KUNNEN AANVRAGEN VIA EEN ID
        public ActionResult<User> GetUserById(int id)
        {
            var TheUser = _context.Users.Include(b => b.UserId)
                                         .SingleOrDefault(b => b.UserId == id);
            if (TheUser == null)
                return NotFound();

            return TheUser;
            //constructor ID MEEGEVEN // NIEUWE OBJECT = CONTEXT.LIJST.Zoek/Find.(id) ALS DE AUTHOR NULL IS ERROR GEVEN ANDERS OK
        }
        [HttpDelete]
        //RESOURCE KUNNEN DELETEN
        public IActionResult DeleteUser(int id)
        {
            var theBook = _context.Users.Find(id);
            if (theBook == null)
                return NotFound();

            _context.Users.Remove(theBook);
            _context.SaveChanges();
            return NoContent();
        }
        [HttpPut]
        // RESOURCE KUNNEN AANPASSEN
        public ActionResult<User> AddUser([FromBody]User User)
        {
            _context.Users.Update(User);
            _context.SaveChanges();
            //User RETURNEN MET ID 
            return Created("", User);
        }
        [HttpPost]
        // RESOURCE KUNNEN AANMAKEN
        public ActionResult<User> UpdateUser([FromBody]User User)
        {

            _context.Users.Add(User);
            _context.SaveChanges();
            //ID RETURN
            return Created("", User);
        }
    }
}