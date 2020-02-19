import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTable } from '@angular/material/table'
import { DocumentsTableDataSource, DocumentsTableItem } from './documents-table-datasource'
import {InterationService} from "../../interation.service";


@Component({
  selector: 'documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.css']
})
export class DocumentsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DocumentsTableItem>;
  dataSource: DocumentsTableDataSource;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['fileName', 'alfrescoId' , 'relatedZIP' , 'origin', 'alfrescoValidationState', 'responseError']
 constructor(private alfrescoDocumentService : InterationService){
 }

  ngOnInit() {
    this.dataSource = new DocumentsTableDataSource();

    this.alfrescoDocumentService.currentAlfrescoList.subscribe( docList => {
      
      this.dataSource.data = JSON.parse(JSON.stringify(docList))      
      console.log('document List on subscribe',this.dataSource.data)
      })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
