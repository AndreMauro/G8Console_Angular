import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var angular: any;
@Component({
  selector: 'app-kovis',
  templateUrl: './kovis.component.html',
  styleUrls: ['./kovis.component.css']
})
export class KovisComponent implements OnInit {
  documents = []
		
  constructor(private http : HttpClient) { }

  ngOnInit() {
	this.getLotDocuments()  
	 // fetch('http://localhost:8580/alfresco')
  }
  
  getLotDocuments(){
	var resp = this.http.get('http://localhost:8580/alfresco')
	/*var ff = fetch('http://localhost:8580/alfresco')
	ff.then( (doc) =>  alert(doc.Filename))
	alert('ff ' + doc.Filename)*/
	resp.forEach( doc => { alert(doc)})
  }
  
}
