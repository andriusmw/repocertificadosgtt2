using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApiGTT.Models;
using ApiGTT.Helpers; //Para la funcion MD5 de cifrado

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificatesController : ControllerBase
    {
         private readonly AppDBContext _context;

           public CertificatesController(AppDBContext context) //Crea 1 certificado sino existe ninguno
        {
            this._context = context;
            if(this._context.Certificates.Count()==0)
            {
                    Console.WriteLine("No existen certificados");
                    Certificates certificadoDEMO = new Certificates();
                    certificadoDEMO.alias="AliasDEMO";
                    certificadoDEMO.password=Encrypt.Hash("pass");
                    certificadoDEMO.id_orga="id_orgaDEMO";
                    certificadoDEMO.nombre_cliente="nombre_clienteDEMO";
                    certificadoDEMO.integration_list="integrationlistDEMO";
                    certificadoDEMO.contacto_renovacion="contactoDEMO";
                    certificadoDEMO.repositorio="repoDEMO";
                    certificadoDEMO.observaciones="observacioneDEMO";
                   
                    this._context.Certificates.Add(certificadoDEMO);
                    this._context.SaveChanges();
                   
            }
        }

        // GET api/Certificates
        [HttpGet]
        public ActionResult<List<Certificates>> GetAll() //Obtiene todos los certificados en una lista
        {
            return this._context.Certificates.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/Certificates
        [HttpPost]
          public ActionResult<Certificates> Post([FromBody] Certificates value) //Pasa valores del front al contexto de Certificados
        {
                    this._context.Certificates.Add(value);
                    this._context.SaveChanges();
                    return Ok(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
