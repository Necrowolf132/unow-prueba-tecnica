#!/bin/bash

# Función para mostrar el uso del script
# RAELWAY example -> ./mysql_backup_restore.sh --host junction.proxy.rlwy.net --port 47208 --user root --password sgkxOSxSKVXFDcbpMOYvamAFtPCSESsg --database railway --backup 
show_usage() {
    echo "Uso: $0  --host DB_HOST --port DB_PORT --user DB_USER --password DB_PASSWORD --database DB_NAME [--backup | --restore BACKUP_FILE]"
    echo
    echo "Ejemplos:"
    echo "  Para realizar una copia de seguridad (backup):"
    echo "    $0 --host localhost --port 3306 --user root --password mypassword --database mydb --backup"
    echo
    echo "  Para restaurar desde un archivo de backup:"
    echo "    $0 --host localhost --port 3306 --user root --password mypassword --database mydb --restore backup.sql"
    exit 1
}

# Variables por defecto
DB_PORT=3306  # Puerto por defecto de MySQL

# Parseo de parámetros
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --host) DB_HOST="$2"; shift ;;
        --port) DB_PORT="$2"; shift ;;
        --user) DB_USER="$2"; shift ;;
        --password) DB_PASSWORD="$2"; shift ;;
        --database) DB_NAME="$2"; shift ;;
        --backup) BACKUP=true ;;
        --restore) RESTORE=true; BACKUP_FILE="$2"; shift ;;
        *) echo "Parámetro desconocido: $1"; show_usage ;;
    esac
    shift
done

# Validar parámetros obligatorios
if [[ -z "$DB_HOST" || -z "$DB_USER" || -z "$DB_PASSWORD" || -z "$DB_NAME" ]]; then
    echo "Error: Faltan parámetros obligatorios."
    show_usage
fi

# Función para realizar el dump (copia de seguridad)
backup_database() {
    BACKUP_DIR="./backups"
    TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
    BACKUP_FILE="$BACKUP_DIR/${DB_NAME}_backup_$TIMESTAMP.sql"

    # Crea el directorio de backups si no existe
    mkdir -p "$BACKUP_DIR"

    echo "Realizando copia de seguridad de la base de datos '$DB_NAME' en '$DB_HOST:$DB_PORT'..."
    mysqldump -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" > "$BACKUP_FILE"

    if [ $? -eq 0 ]; then
        echo "Copia de seguridad completada exitosamente: $BACKUP_FILE"
    else
        echo "Error al realizar la copia de seguridad de la base de datos."
        exit 1
    fi
}

# Función para restaurar la base de datos desde un archivo de backup
restore_database() {
    if [ ! -f "$BACKUP_FILE" ]; then
        echo "Archivo de backup no encontrado: $BACKUP_FILE"
        exit 1
    fi

    echo "Restaurando la base de datos '$DB_NAME' en '$DB_HOST:$DB_PORT' desde '$BACKUP_FILE'..."
    mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < "$BACKUP_FILE"

    if [ $? -eq 0 ]; then
        echo "Base de datos restaurada exitosamente desde $BACKUP_FILE"
    else
        echo "Error al restaurar la base de datos."
        exit 1
    fi
}

# MENU
if [[ "$BACKUP" == true ]]; then
    backup_database
elif [[ "$RESTORE" == true ]]; then
    restore_database
else
    echo "Error: Debes especificar --backup o --restore."
    show_usage
fi