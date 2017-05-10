using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using web_tutorial_api.Models;

namespace web_tutorial_api.Controllers
{
    public class DevelopersController : ApiController
    {
        static List<Developer> developers = new List<Developer>
        {
            new Developer
            {
                Name = "Emil",
                Surname = "Eklund",
                Age = 20
            },
            new Developer
            {
                Name = "Ralf",
                Surname = "Karlsson",
                Age = 44
            },
            new Developer
            {
                Name = "Kristoffer",
                Surname = "Lindström",
                Age = 20
            },
            new Developer
            {
                Name = "Niclas",
                Surname = "Falkman",
                Age = 52
            }
        };

        // GET: api/Developers
        public IEnumerable<Developer> Get() => developers;

        // GET: api/Developers/5
        public Developer Get(int id) => 
            developers.ElementAt(id);

        // POST: api/Developers
        public void Post([FromBody]Developer developer) =>
            developers.Add(developer);

        // PUT: api/Developers/5
        public void Put(int id, [FromBody]Developer developer) =>
            developers[id] = developer;

        // DELETE: api/Developers/5
        public void Delete(int id) =>
            developers.RemoveAt(id);
    }
}
