using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YuGiOhEigenApiProjectViktorPera.DATAMODELS;

namespace YuGiOhEigenApiProjectViktorPera.DBCONTEXT
{
    public class YUGIOHCONTEXT : DbContext
    {
        public YUGIOHCONTEXT(DbContextOptions<YUGIOHCONTEXT> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<CARD> Cards { get; set; }
        public DbSet<Deck> Decks { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
