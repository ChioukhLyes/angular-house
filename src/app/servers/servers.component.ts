import { Component, OnInit } from '@angular/core';


// example of using online template and style
@Component({
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styles: [`
    h3 {
      color : blue;
    }`]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
