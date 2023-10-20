import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemonDetails:any=[]
  searchTerm:any

  constructor(private api:ApiService, private router:Router) { }


  ngOnInit(): void {
    this.pokemon()
  }

  pokemon(){
    this.api.getPokemonName().subscribe(
      (resp:any)=>{

        this.pokemonDetails=resp.results
      },
     (err:any)=>{
      console.log(err);
     }
    )
  }
  getFirstLetter(data:any) {
    if (data.length > 0) {
      return data.charAt(0);
    } else {
      return ''; 
    }
  }

  goToDetails(name:any){
    this.router.navigate(['pokemon/details/'+name])
  }
}
