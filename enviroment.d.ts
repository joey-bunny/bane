declare namespace NodeJs {
  export interface processEnv {
    MYSQL_DB_HOST?: string;
    MYSQL_DB_PORT?: string;
    MYSQL_DB_USER?: string;
    MYSQL_DB_PASSWORD?: string;
    MYSQL_DB_NAME?: string;
    ENVIROMENT: 'DEVELOPEMENT';
  }
}
