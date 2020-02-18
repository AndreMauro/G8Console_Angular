import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MiestableDataSource, MiestableItem } from './miestable-datasource';

@Component({
  selector: 'app-miestable',
  templateUrl: './miestable.component.html',
  styleUrls: ['./miestable.component.css']
})
export class MiestableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<MiestableItem>;
  dataSource: MiestableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'documentclass', 'docname','sequence','alfrescoID'];

  ngOnInit() {
    this.dataSource = new MiestableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
