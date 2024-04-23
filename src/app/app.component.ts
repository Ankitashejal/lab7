import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,HttpClientModule],
  providers: [DataService]
})
export class AppComponent {
  constructor() {}
}
