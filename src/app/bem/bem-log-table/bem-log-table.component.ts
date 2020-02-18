import { AfterViewInit, Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BemLogTableDataSource, BemLogTableItem } from './bem-log-table-datasource';
import {InterationService} from "../../interation.service";

@Component({
  selector: 'app-bem-log-table',
  templateUrl: './bem-log-table.component.html',
  styleUrls: ['./bem-log-table.component.css']
})
export class BemLogTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<BemLogTableItem>;
  dataSource: BemLogTableDataSource;

  constructor(private interationService: InterationService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'AUDIT_ID', 'ACTION', 'ORIGIN', 'REQUEST_DATE', 'RESPONSE_DATE', 'STATUS'];

  ngOnInit() {
    this.populateTable()
    this.dataSource = new BemLogTableDataSource()
  }

  async populateTable (){
    await this.interationService.bemLogAuditMessage$.subscribe(
      logAudit =>{
        this.dataSource.data = JSON.parse(JSON.stringify(logAudit))
      }
    )
    console.log("After Error")
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
