export class Usuario {
  public userName: string;
  public userClave: string;
  constructor(public nombre: string, public clave: string) {
    this.userName = nombre;
    this.userClave = clave;
  }
}
