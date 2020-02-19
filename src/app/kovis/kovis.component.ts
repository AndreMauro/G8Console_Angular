import { Component, OnInit } from '@angular/core';
import {InterationService} from "../interation.service";


@Component({
  selector: 'app-kovis',
  templateUrl: './kovis.component.html',
  styleUrls: ['./kovis.component.css']
})

export class KovisComponent implements OnInit {
  documents;
  constructor(private alfrescoDocumentsService: InterationService) { }
  showTable : boolean = false
  ngOnInit() {
	this.getLotDocuments()  
  }
  
  getLotDocuments(){
	 fetch('http://localhost:8080/alfresco', {	headers: {'Content-Type': 'application/json'} } )
		.then(  res =>  res.json() )
		.then(docs => {
			console.log(docs)
			this.documents = docs
      this.alfrescoDocumentsService.changeAlfrescoList(this.documents)
      return docs
    })

    this.showTable =  (this.documents != null)
  }
  
}
