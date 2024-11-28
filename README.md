**Requisitos previos para correr el proyecto**

- Tener mkcert instalado (Herramienta de terminal de linux para crear certificados autofirmado SSl para pruebas locales con https)
- Tener Docker y Docker compose instalado en el sistema host
- Acceso a una terminal Linux que puede ejecutar los respaldos de la db corriendo el script mysql_backup_restore.sh

**Pasos para poder levantar el proyecto en local**

1- entra en la carpeta principal del proyecto y ejecuta "docker compose -f docker-compose.yml up db" (esto correra y dejara funcionnado la base de datos)
2- posteriormente correr el
