using LmycWeb.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmycWeb.Models
{
    public class DummyData
    {
        public static void Initialize(ApplicationDbContext db)
        {
            if (!db.Boats.Any())
            {
                db.Boats.Add(new Boat
                {
                    BoatName = "Eggs-ta-Sea",
                    Picture = "http://newimages.yachtworld.com/resize/1/77/38/6207738_20170418025556754_1_XLARGE.jpg?f=/1/77/38/6207738_20170418025556754_1_XLARGE.jpg&w=1200&h=798&t=1498735754000",
                    LengthInFeet = 15,
                    Make = "Byte",
                    Year = "1980",
                    Record = "0-20 has never won a race and never will",
                    CreationDate = DateTime.Parse("2008-11-11"),
                    CreatedBy = "Id"
                });
                db.SaveChanges();
            }
        }
    }
}
