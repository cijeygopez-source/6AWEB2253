import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MyserviceService } from './myservice.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Demo'
  ndate
  componentproperty
  constructor(private myservice:MyserviceService) {
    this.ndate = this.myservice.showTodayDate()
    this.componentproperty = this.myservice.serviceproperty
  }
}
