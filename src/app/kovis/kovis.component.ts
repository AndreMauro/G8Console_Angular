import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var angular: any;
@Component({
  selector: 'app-kovis',
  templateUrl: './kovis.component.html',
  styleUrls: ['./kovis.component.css']
})
export class KovisComponent implements OnInit {
  documents;
		
  constructor(private http : HttpClient) { }

  ngOnInit() {
	this.getLotDocuments()  
	 // fetch('http://localhost:8080/alfresco')
  }
  
    getLotDocuments(){
		
	//this.http.get<any>('https://localhost:8080/alfresco')
		console.log('yaaaa')
	 fetch('http://localhost:8080/alfresco', {
		
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Accept': 'application/json'
		}})
		.then(  res =>  res.json() )
		.then(docs => alert(  JSON.stringify(docs[0])))
  }
  
}
