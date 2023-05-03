export interface Configuration {
  port: number;
  nodeEnv: string;
  appEnv: string;
  jwtKey?: string;
  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}
