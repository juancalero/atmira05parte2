import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //uri = '/users';
  uri = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }


  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  addUser(nombre, apellidos, direccion, telefono) {
    const obj = {
      nombre: nombre,
      apellidos: apellidos,
      direccion: direccion,
      telefono: telefono
      
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  
}
