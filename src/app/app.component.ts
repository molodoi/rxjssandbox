import { Component } from '@angular/core';
import { MyCustomObserver } from './mycustomobserver';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/observable/from';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><button (click)="ceateObs()">Créer un Observable</button>`,
})
export class AppComponent  { 
  name = 'Angular'; 


  ceateObs(){
    let numbers = [1,2,3];
    let numbers$ = Observable.from(numbers);

    numbers$.subscribe(new MyCustomObserver());
  }

}
