using Microsoft.EntityFrameworkCore;
using Produkty.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Concrete
{
    public class BaseRepository
    {
        protected ApplicationDbContext Context;

        public BaseRepository(ApplicationDbContext context)
        {
            //Context = AppDbContext.Create();
            Context = context;
        }
    }
}
