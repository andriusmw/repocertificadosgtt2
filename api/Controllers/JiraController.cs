using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApiGTT.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JiraController : ControllerBase //Cambiar nombre del controller al que queramos

     
    {
        private readonly AppDBContext _context; //Para que cargue el contexto.

         /*  public JiraController(AppDBContext context) //Sino funciona seguramennte falte esto.
        { this._context = context;}  */

        // GET api/Jira
        [HttpGet]
        public ActionResult<List<Jira>> Get()  //Carga lista de objetos tipo Jira
        {
            return this._context.Jira.ToList();  // continuación de lo de arriba
        }

        // GET api/Jira/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/Jira
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/Jira/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/Jira/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
