import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'client';
  buttonText = 'Purchase History';
  constructor(private router: Router){

  }

  ngOnInit(): void {
   
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.router.url === '/getAllUserBuys' ? this.buttonText = 'Back' : this.buttonText = 'Purchase History';
          console.log('this.router.url', this.router.url);
        }
      }
    );
  };

  navigate(){
    console.log(this.router.url)
    if(this.router.url === '/'){
      this.router.navigate(['/getAllUserBuys']);
    }
    else{
      this.router.navigate(['/']);
    }
    
  }
  
}
