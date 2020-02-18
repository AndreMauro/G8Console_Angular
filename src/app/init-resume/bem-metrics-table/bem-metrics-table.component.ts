import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BemMetricsTableDataSource, BemMetricsTableItem } from './bem-metrics-table-datasource';
import {InterationService} from "../../interation.service";

@Component({
  selector: 'app-bem-metrics-table',
  templateUrl: './bem-metrics-table.component.html',
  styleUrls: ['./bem-metrics-table.component.css']
})
export class BemMetricsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<BemMetricsTableItem>;
  dataSource: BemMetricsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'value','state'];

  constructor(private interationService: InterationService) {}

  async ngOnInit() {
    this.populateTable()
    this.dataSource = new BemMetricsTableDataSource();
  }

  async populateTable (){
    await this.interationService.metricsMessage$.subscribe(
      metrics =>{
        console.log(JSON.stringify(metrics))

        this.dataSource.data = JSON.parse(JSON.stringify(metrics))
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
