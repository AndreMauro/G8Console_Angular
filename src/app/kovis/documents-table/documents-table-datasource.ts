import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DocumentsTableItem {
  AlfrescoID: string;
  RelatedZIP: string;
  ORIGIN : string;
  AlfrescoValidationState: string;
  ResponseError: string;
  filename: string;
}

// TODO: replace this with real data from your application
var EXAMPLE_DATA: DocumentsTableItem[]/* = [
  { filename:"", AlfrescoID:"" , RelatedZIP: "", ORIGIN: "", AlfrescoValidationState:"", ResponseError: "" }

];*/

/**
 * Data source for the DocumentsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DocumentsTableDataSource extends DataSource<DocumentsTableItem>  {
  data: DocumentsTableItem[]// = EXAMPLE_DATA;
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
  connect(): Observable<DocumentsTableItem[]> {
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
  private getPagedData(data: DocumentsTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DocumentsTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'AlfrescoID': return compare(a.AlfrescoValidationState, b.AlfrescoID, isAsc);
        case 'RelatedZIP': return compare(+a.RelatedZIP, +b.RelatedZIP, isAsc);
        case 'ORIGIN': return compare(a.ORIGIN, b.ORIGIN, isAsc);
        case 'AlfrescoValidationState': return compare(+a.AlfrescoValidationState, +b.AlfrescoValidationState, isAsc);
        case 'ResponseError': return compare(a.ResponseError, b.ResponseError, isAsc);
        case 'filename': return compare(+a.filename, +b.filename, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
