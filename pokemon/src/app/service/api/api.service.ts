import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl= environment.live_url;

  constructor(private http:HttpClient) {}

  getPokemonName(){
    return this.http.get(`${this.baseurl}/pokemon?limit=25&offset=0`)
  }
  getPokemonDetails(name:any){
    return this.http.get(`${this.baseurl}/pokemon/${name}`)
  }
  getPokemonEvloutionURL(name:any){
    return this.http.get(`${this.baseurl}/pokemon-species/${name}`)
  }
  getPokemonEvloutionDetails(url:any){
    return this.http.get(url);
  }


}
