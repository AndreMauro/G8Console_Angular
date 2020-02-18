import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterationService {

  private bemLogAuditSource = new Subject<JSON>()
  private initMetricsSource = new Subject<JSON>()
  private alfrescoList = new Subject()

  
  bemLogAuditMessage$ = this.bemLogAuditSource.asObservable()
  metricsMessage$ = this.initMetricsSource.asObservable()
  currentAlfrescoList = this.alfrescoList.asObservable()

  constructor() { }

  sendBEMLOGAUDIT (log: JSON){
    this.bemLogAuditSource.next(log)
  }

  sendMetricsToInit (log: JSON){
    this.initMetricsSource.next(log)
  }

  changeAlfrescoList(aList){
    this.alfrescoList.next(aList)
  }
}
