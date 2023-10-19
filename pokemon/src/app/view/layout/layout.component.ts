import { Component, ViewChild, HostListener } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent  {

  showToggle:any;
  showToolbar:any;
  mode: any;
  openSidenav:boolean=true;
  constructor( private router: Router) {

   }

  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);

  @ViewChild('sidenav') matSidenav: MatSidenav | undefined;

  ngOnInit() {
    this.getScreenWidth().subscribe(width => {
       if (width < 640) {
        this.showToggle = 'show';
        this.showToolbar = 'hide';
        this.mode = 'over';
        this.openSidenav = false;
      }
      else if (width > 640) {
        this.showToggle = 'hide';
        this.showToolbar = 'show';
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

}

