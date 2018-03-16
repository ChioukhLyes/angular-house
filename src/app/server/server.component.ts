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

  serverId: Number = 10;
  serverStatus: String = 'offline';

  getServerStatus () {
    return this.serverStatus;
  }

  getServerId () {
    return this.serverId;
  }

  constructor() { }
  ngOnInit() {
  }
}
