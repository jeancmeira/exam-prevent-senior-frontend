import { Component, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-log-manual',
  templateUrl: './log-manual.component.html',
  styleUrls: ['./log-manual.component.css']
})
export class LogManualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onClick() {
  	$("#myModal").modal(); 
  }

}
