using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApiGTT.Models;
using ApiGTT.Helpers;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDBContext _context;

        public AuthController(AppDBContext context) //Crea usuario sino existe ninguno
        { this._context = context;}

        // GET api/Auth
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/Auth/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/Auth
        [HttpPost]
        public ActionResult Post([FromBody] Users value)
        {
            try{
                //Console.WriteLine("Usuario recibido :" + value.username);
            Users UserResult = this._context.Users.Where(
                user=>user.username==value.username).First();
                if(UserResult.password == Encrypt.Hash(value.password) ){
                    return Ok(UserResult); //devolvería een verdad el JWT
                }else {
                    Console.WriteLine("Contraseña incorrecta");
                    return Unauthorized();
                }
             }catch(Exception e){
                 return NotFound();
               //  Console.WriteLine(e.Message);
             }
        }

        // PUT api/Auth/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/Auth/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
