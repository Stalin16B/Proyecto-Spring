Para ejecutar nuestro proyecto de spring iniciamos este por medio de un compilador de texto o IDE
y asi se levantara el servicio en el puerto 8080, el cual seria http://localhost:8080/api/vehicles/
este nos ayudara a comunicarnos con nuestro frontend
Por parte de la base de datos se crea automaticamente en nuestra base de datos de PostgeSQL 15 la cual no deberiamos tener
inconvenientes para la comunicación con la BD, CREDENCIALES DE LA BD (Usuario: postgre, Contraseña; ROOT, Puerto: 5432)
si tiene inconvenientes de que le da errores el programa, debe ser por como tenga sus credenciales en su PostgreSQL 
estos se los remplaza en el archivo application.properties, y lo ejecuta el servidor sin problema

Nota:
Lo que no se implemento correctamente fue la tarea de atomatización en el consumo del servicio REST del precio, lo intentecon Rest Template
pero no se podia comunicar correctamente con el servidor.
