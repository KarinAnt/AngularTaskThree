import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  serverArray = [
    {
      'name':"A Test Recipe",
      'body':"This is simply a test",
      'image':"assets/Recipe_logo.jpeg"
    },
    {
      'name':"A Test Recipe",
      'body':"This is simply a test",
      'image':"assets/Recipe_logo.jpeg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
