import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moinapp1';
  loadedFeature='recipe';
  onNavigate(inComingFeature: string){
    this.loadedFeature=inComingFeature;
  }
}
