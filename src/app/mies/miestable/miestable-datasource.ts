import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MiestableItem {

  docname: string,
  documentclass: string;
  date: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MiestableItem[] = [
  {date: 1, documentclass: 'Hydrogen', docname:'n/a'},
  {date: 2, documentclass: 'Helium', docname:'n/a'},
  {date: 3, documentclass: 'Lithium', docname:'n/a'},
  {date: 4, documentclass: 'Beryllium', docname:'n/a'},
  {date: 5, documentclass: 'Boron', docname:'n/a'},
  {date: 6, documentclass: 'Carbon', docname:'n/a'},
  {date: 7, documentclass: 'Nitrogen', docname:'n/a'},
  {date: 8, documentclass: 'Oxygen', docname:'n/a'},
  {date: 9, documentclass: 'Fluorine', docname:'n/a'},
  {date: 10, documentclass: 'Neon', docname:'n/a'},
  {date: 11, documentclass: 'Sodium', docname:'n/a'},
  {date: 12, documentclass: 'Magnesium', docname:'n/a'},
  {date: 13, documentclass: 'Aluminum', docname:'n/a'},
  {date: 14, documentclass: 'Silicon', docname:'n/a'},
  {date: 15, documentclass: 'Phosphorus', docname:'n/a'},
  {date: 16, documentclass: 'Sulfur', docname:'n/a'},
  {date: 17, documentclass: 'Chlorine', docname:'n/a'},
  {date: 18, documentclass: 'Argon', docname:'n/a'},
  {date: 19, documentclass: 'Potassium', docname:'n/a'},
  {date: 20, documentclass: 'Calcium', docname:'n/a'},
];

/**
 * Data source for the Miestable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MiestableDataSource extends DataSource<MiestableItem> {
  data: MiestableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<MiestableItem[]> {
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
  private getPagedData(data: MiestableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MiestableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'documentclass': return compare(a.documentclass, b.documentclass, isAsc);
        case 'date': return compare(+a.date, +b.date, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
