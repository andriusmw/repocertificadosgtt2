using System;  //because of YES 
using System.Text; //Para el utf8
using System.Security.Cryptography; //para el MD5

namespace ApiGTT.Helpers {

    class Encrypt {
        public static string Hash(string value ) { //Encriptar con MD5 la password
            StringBuilder hash = new StringBuilder();
            MD5CryptoServiceProvider md5provider = new MD5CryptoServiceProvider();
            byte[] bytes = md5provider.ComputeHash(new UTF8Encoding().GetBytes(value));
            for (int i= 0; i<bytes.Length;i++){
                hash.Append(bytes[i].ToString("x2")); //Creo que está codificando cada letra.
            }
            return hash.ToString();
        }
    }
}