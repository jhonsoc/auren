/* eslint-disable prettier/prettier */
export interface JwtPayload {
  sub: string;
  documento: string;
  nombre: string;
  rol: string;
  iat?: number;
  exp?: number;
}
