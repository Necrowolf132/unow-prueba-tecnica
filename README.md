**Requisitos previos para correr el proyecto**

- Tener mkcert instalado (Herramienta de terminal de linux para crear certificados autofirmado SSl para pruebas locales con https)
- Tener Docker y Docker compose instalado en el sistema host
- Acceso a una terminal Linux que puede ejecutar los respaldos de la db corriendo el script mysql_backup_restore.sh

**Pasos para poder levantar el proyecto en local**

1- se debe crear unos certificados autofirmados usando mkcert en este casos los certificados necesarios para el dominio "unow-prueba-tecnica.jeelidev.online" pasos:

    - Entrar a la carpeta principal del proyecto y correr el comando "mkcert unow-prueba-tecnica.develop.jeelidev.online"
    - mientras estas en el mismo path correr el comando "mkcert -install" (esto guardara los certificados creados para uso local dentro de los repositorias locales de certificados validos  de los navegadores que tengas instalados, para poder usar el certificado como para pruabas como si fuera oficial)
    - Copiar los certificados creados a dentro de la carpeta "certs" (si es necesario borrar o sobreescribir los existentes)

2- entra en la carpeta principal del proyecto y ejecuta "docker compose -f docker-compose.yml up db" (esto correra y dejara funcionnado la base de datos)
3- posteriormente correr el
