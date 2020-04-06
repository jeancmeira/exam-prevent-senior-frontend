import { Component, OnInit } from '@angular/core';

declare var validateDateTime: any

@Component({
  selector: 'app-busca-log',
  templateUrl: './busca-log.component.html',
  styleUrls: ['./busca-log.component.css']
})
export class BuscaLogComponent implements OnInit {

  public ip: String = "";
  public startDate: String = "";  	
  public endDate: String = "";

  constructor() { }

  ngOnInit() {
  }

  search() {
	 validateDateTime(this.startDate); 
  }	
}
