import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {MiestableItem} from "../../mies/miestable/miestable-datasource";

// TODO: Replace this with your own data model type
export interface BemLogTableItem {
  ACTION: string;
  AUDIT_ID: string;
  ORIGIN: string;
  REQUEST_DATE: string;
  RESPONSE_DATE: string;
  STATUS: string;
}

// TODO: replace this with real data from your application
// TODO: replace this with real data from your application
const EXAMPLE_DATA: BemLogTableItem[] = [];

/**
 * Data source for the BemLogTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class BemLogTableDataSource extends DataSource<BemLogTableItem> {
  data: BemLogTableItem[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<BemLogTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: BemLogTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: BemLogTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'ACTION': return compare(a.ACTION, b.ACTION, isAsc);
        case 'REQUEST_DATE': return compare(+a.REQUEST_DATE, +b.REQUEST_DATE, isAsc);
        case 'RESPONSE_DATE': return compare(+a.RESPONSE_DATE, +b.RESPONSE_DATE, isAsc);
        case 'ORIGIN': return compare(+a.ORIGIN, +b.ORIGIN, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
