import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  name: any;
  details: any;
  habitat: any;
  pokemonTypes: any;
  evolution: any;
  pokemonAbility: any;
  moveset: any;
  
  @ViewChild('myChart') private chartRef!: ElementRef;
  private chart!: Chart;

  constructor( private cdr: ChangeDetectorRef,private api: ApiService, private route: ActivatedRoute, private router: Router) {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.getPokemonDetails(this.name);
    this.getPokemonEvolution(this.name);
  }

  ngAfterViewInit(): void {
    // Ensure the chart is created after the view and element are initialized.
    if (this.details) {
      this.createChart(this.details.stats);
    }
  }

  getPokemonDetails(name:any) {
    this.api.getPokemonDetails(name).subscribe(
      (resp: any) => {
        this.details = resp;
        this.pokemonTypes = resp.types.map((type: any) => type.type.name);
        this.pokemonAbility = resp.abilities.map((ability: any) => ability.ability.name);
        this.moveset = resp.moves.map((move: any) => move.move.name);
     
        
        // Check if ngAfterViewInit has already been called before creating the chart.
        if (this.chartRef && this.details) {
          this.createChart(this.details.stats);
        }

      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  getPokemonEvolution(pokemonName: string) {
    this.api.getPokemonEvloutionURL(pokemonName)
      .subscribe((data:any) => { ;
        this.api.getPokemonEvloutionDetails(data.evolution_chain.url)
          .subscribe((data:any) => {

            this.evolution=data

          });
      });
  }
  createChart(stats: any) {
    if (this.chart) {
      this.chart.destroy();
    }
    const labels = stats.map((stat: any) => stat.stat.name);
    const data = stats.map((stat: any) => stat.base_stat);
    const backgroundColor = [
      'red', 'blue', 'yellow', 'green', 'purple', 'orange'
    ].slice(0, stats.length); 


    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Base Stats',
        data: data,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 1,
        barThickness:50,
      }]
    };

    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    })
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
    this.name=name
    this.getPokemonDetails(this.name);
    this.getPokemonEvolution(this.name);
    this.cdr.detectChanges(); 

  }
}

