
  export interface Certificates {
    listId: number;
    createdAt: Date;
    modifiedAt: Date;
    name: string;

     id: number;
    alias:string  ;
       //public string entidad_emisiora { get; set; }
       //public string numero_de_serie { get; set; }
       //public string subject { get; set; }
       //public DateTime caducidad { get; set; }

      password:string ;  
      id_orga:string ;
      nombre_cliente:string;
      contacto_renovacion:string;
      repositorio:string;
      observaciones:string ;
      integration_list:string;
       //public Users user_id { get; set; }
    
  }
  
  export interface Data {
    lists: Array<Certificates>;
  }
