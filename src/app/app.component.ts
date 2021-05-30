import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loading-strategy';

  constructor(
    router: Router
  ){

  }

  // navigateToTeachers(){
  //   this.router.navigate(['/teachers']).then();
  // }
}
