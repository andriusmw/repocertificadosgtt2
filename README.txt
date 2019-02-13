La parte del Backend está en la carpeta "api"; todo lo demás es Front-End.

Para poder levantar la aplicación es necesario :
    1.realiar "npm start" dentro de la carpeta "certificadosgttproject"
    2.realizar "dotnet run" dentro de la carptea "certificadosgttproject/api"
    3.levantar un contenedor de Docker.
    4. ejecutar "docker-compose -f stack.yml up" 
    5. efectuar "dotnet database update" en "certificadosgttproject/api".
    6. Por último ir a la ruta de navegador "localhost/api/Users" para crear un usuario administrador
        por defecto con el que poder entrar.    
            (Usuario: admin)
            (Password: admin)