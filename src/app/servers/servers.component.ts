import { Component, OnInit } from '@angular/core';


// example of using online template and style
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    h3 {
      color : blue;
    }`]
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverCreationStatus = 'No server was created.';
  serverName = 'Test';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

}

