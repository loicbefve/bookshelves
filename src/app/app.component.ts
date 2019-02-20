import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyCDBgRAgwzoHSDYaAYCY9-T1oe8-PBdlRA',
      authDomain: 'bookshelves-76041.firebaseapp.com',
      databaseURL: 'https://bookshelves-76041.firebaseio.com',
      projectId: 'bookshelves-76041',
      storageBucket: '',
      messagingSenderId: '616285128381'
    };
    firebase.initializeApp(config);
  }

  title = 'bookshelves';
}
