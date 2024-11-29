FROM php:8.3-apache

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Instalar las extensiones de PHP necesarias
RUN docker-php-ext-install mysqli pdo_mysql

# Habilitar módulos de Apache, incluyendo remoteip y otros necesarios
RUN a2enmod rewrite ssl socache_shmcb headers remoteip

# Configurar encabezados para proxy inverso
RUN echo 'RemoteIPHeader X-Forwarded-For' >> /etc/apache2/apache2.conf && \
    echo 'SetEnvIf X-Forwarded-Proto "https" HTTPS=on' >> /etc/apache2/apache2.conf

# Copiar los archivos al contenedor
USER www-data
COPY html/ /var/www/html/
USER root
RUN chown -R www-data:www-data /var/www/html


# Copiar la configuración personalizada de PHP
COPY ./custom-php.ini "$PHP_INI_DIR/conf.d/"

# Usar las variables de entorno proporcionadas por Railway
ARG WORDPRESS_DB_HOST
ARG WORDPRESS_DB_USER
ARG WORDPRESS_DB_P
ARG WORDPRESS_DB_NAME

# Definir las variables de entorno en el contenedor
ENV WORDPRESS_DB_HOST=${WORDPRESS_DB_HOST}
ENV WORDPRESS_DB_USER=${WORDPRESS_DB_USER}
ENV WORDPRESS_DB_P=${WORDPRESS_DB_P}
ENV WORDPRESS_DB_NAME=${WORDPRESS_DB_NAME}

# Cambiar el usuario www-data a UID 1000 y grupo GID 1000
#RUN usermod -u 1000 www-data && groupmod -g 1000 www-data

# Establecer las configuraciones de PHP para producción
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"


USER www-data

# Exponer los puertos
EXPOSE 80 443
