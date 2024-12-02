**Requisitos previos para correr el proyecto**

- Tener mkcert instalado (Herramienta de terminal de linux para crear certificados autofirmado SSl para pruebas locales con https)
- Tener Docker y Docker compose instalado en el sistema host
- Acceso a una terminal Linux que puede ejecutar los respaldos de la db corriendo el script mysql_backup_restore.sh

**Pasos para poder levantar el proyecto en local**

1- se debe crear unos certificados autofirmados usando mkcert en este casos los certificados necesarios para el dominio "unow-prueba-tecnica.jeelidev.online" pasos:

    1. Entrar a la carpeta principal del proyecto y correr el comando "mkcert unow-prueba-tecnica.develop.jeelidev.online"
    2. mientras estas en el mismo path correr el comando "mkcert -install" (esto guardara los certificados creados para uso local dentro de los repositorias locales de certificados validos  de los navegadores que tengas instalados, para poder usar el certificado como para pruabas como si fuera oficial)
    3. Copiar los certificados creados a dentro de la carpeta "certs" (si es necesario borrar o sobreescribir los existentes)

    NOTA:IMPORTANTE> si crea de una ves el certificado para el dominio unow-prueba-tecnica.develop.jeelidev.online, sera mejor pues no tendra que
    meterse a modificar nada realacionado con los archivos Dockerfile.dev y docker-compose.yml, en el caso de crear las credenciales de pruebas para un dominio diferente si sera necesario modificar por el correspondiente nombre de archivo cd certificaco ambas lines en los dos archivos

    en docker-compose.yml:

        volumes:
      - ./html:/var/www/html
      - ./certs/unow-prueba-tecnica.develop.jeelidev.online.pem:/etc/ssl/certs/unow-prueba-tecnica.develop.jeelidev.online.pem
      - ./certs/unow-prueba-tecnica.develop.jeelidev.online-key.pem:/etc/ssl/private/unow-prueba-tecnica.develop.jeelidev.online-key.pem
      - /tmp:/tmp

    en Dockerfile.dev:

        RUN sed -i '/SSLCertificateFile.*snakeoil\.pem/c\SSLCertificateFile \/etc\/ssl\/certs\/unow-prueba-tecnica.develop.jeelidev.online.pem' /etc/apache2/sites-available/default-ssl.conf && sed -i '/SSLCertificateKeyFile.*snakeoil\.key/cSSLCertificateKeyFile /etc/ssl/private/unow-prueba-tecnica.develop.jeelidev.online-key.pem\' /etc/apache2/sites-available/default-ssl.conf

2- entra en la carpeta principal del proyecto y ejecuta "docker compose -f docker-compose.yml up db" (esto correra y dejara funcionnado la base de datos)
3- posteriormente conectarse al contenedor de la base de datos de docker en este casos myqldb remotamente con cualquier gestor de base de datos de su preferencia o desde line de comando usando las credenciales, y crea una base de datos de nombre "unow"

    - Host:127.0.0.1
    - user:root
    - port:3306
    - password: sgkxOSxSKVXFDcbpMOYvamAFtPCSESsg

4- correr el script que se encuentra en la raiz del diretorio de nombre mysql_backup_restore.sh con las siguientes especificaciones para que cague la base de datos actual

    - ./mysql_backup_restore.sh --host localhost --port 3306 --user root --password sgkxOSxSKVXFDcbpMOYvamAFtPCSESsg --database unow --restore backups/unow_backup.sql

5- (opcional en caso de haber creado otros certificados de pruebo con nombre diferente) Debes entrar a la base de datos con tu administrador de base de datos de preferencia o por cliente de terminal, y cambiar en la tabla de wp_options los valores correspondientes a "siteurl" y "home" por los nombres de dominios a los que les allas creado los certificados de pruebas

**Para correr las pruebas unitarias**

///NOTA IMPORTANTE: para fines de documentacion se deja el proceso que se sigue para cear un set de pruebas desde cero para cualquier plugin que se desee desarrollar y dejar un entorno de pruebas, en caso dado de que solo se desee ejecutar las pruebas para el entorno en cuestion que esta en este repositorio de git puede pasar del paso 1 ir directo al a la ruta "wp-content/plugins/unow-contact-form" y despues hacer el paso 5

1- Entrar al contenedor de docker que se encuentra corriendo correspondinete al nombre del servicio "webserver" del docker-compose con el siguiente
comando docker exec --user 1000:1000 -it <nombre-del-contenedor> /bin/bash
2- una ves en la carpeta html correr el comando "./wp-cli scaffold plugin-tests <nombre-del-plugin>" es este caso el plugin es unow-contact-form
quedaria como "./wp-cli scaffold plugin-tests unow-contact-form"
3- una ves ahi ir a la ruta del plugin a probar en este caso cd wp-content/plugins/unow-contact-form y estando en ese lugar correr el comando "compose install"
4- luego de eso correr el script que se encuentra en la carpeta "/bin/install-wp-tests.sh" de la siguiente manera "./bin/install-wp-tests.sh wordpress_test root 'pasword' localhost version_de_wordpress" en nuestro caso queda asi "./bin/install-wp-tests.sh wordpress_test root 'sgkxOSxSKVXFDcbpMOYvamAFtPCSESsg' myqldb latest". myqldb es el nombre que se le da al servicio de base de datos que crea el archivo docker-compose
5- luego correr a ./vendor/bin/phpunit --bootstrap tests/bootstrap.php

**Para correr las pruebas E2E**

1- ingrese hasta a la ruta donde esta el plugin en este caso wp-content/plugins/unow-contact-form
2- haga npm install esto instalara playwright localmente de no instalarse por esta via haga usted mismo "npm install playwright" y "npm install @playwright/test"
3- ejecutar 'npx playwright install'
4- npx playwright test

///NOTA IMPORTANTE:Por defecto las pruebas estan configuradas para ejecutase en un navegador visible al usuario, si desea que ejecute las pruebas solo en la terminar sin desplegar nada visible modifique la linea

    -   headless: false, // Ejecuta el navegador en modo visible

en el archivo test-form.spec.js y colocar en true

**Credenciales de acceso para el wp-admin**

Usuario:necrowolf
Clave:RRjj88j$$##@@
