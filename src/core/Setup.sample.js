
/**
 * !NON TOCCARE PER NESSUN MOTIVO
 * !DO NOT MODIFY
 * !չփոփոխել
 * !لا تعدل
 * !不要修改
 * !NE MODIFIE PAS
 * 
 * Esempio del foglio di setup del core da copiare nella root del progetto per configurarlo
 * Example of the core setup sheet to be copied to the project root.
 */

// Sys
export const SITENAME = "";

export const Mode = {
    USE_HASH: true,
    STORAGE_DRIVER: 'logic',
    AUTH_TYPE: 'phpsessid' /** bearer / phpsessid */,
    BASIC_AUTH: false,
    HEADER_WITH_CREDENTIALS: false,
    DECIMALS_PLACES: 2,
    PASSWORD_MIN_LENGTH: 8
};

export const BASIC_AUTH = {
    USERNAME: '',
    PASSWORD: ''
}

export const StandardRoutes = {
    LOGIN: 'login',
    PRIVATE_DASHBOARD: 'dashboard'
};

export const Environment = {
    SERVICE_URL: 'sample-api'
};
// # Sys