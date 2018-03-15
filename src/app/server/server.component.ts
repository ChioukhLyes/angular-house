import { Component, OnInit } from '@angular/core';

/**
 *  declaration : selector: '[app-server]' use as attribute
 *  use : <div app-server> </div>
 */

 /**
 *  selector: '.app-server' use as class
 *  use : <div class="app-server"></div>
 */

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
