import {Component, OnInit, ViewChild} from '@angular/core';
import { InterationService } from '../interation.service';
@Component({
  selector: 'app-bem',
  templateUrl: './bem.component.html',
  styleUrls: ['./bem.component.css']
})
export class BemComponent implements OnInit {


  private log_audit_url: string ="http://bkp0desb162.bankinter.bk:8580/bem/logs";
  log_audit_data: JSON

  constructor(private interationService: InterationService) { }

  async ngOnInit() {
    this.fetchLogAudit()
  }

  async fetchLogAudit(){
    console.log("Starting LogAudit");

    await fetch(this.log_audit_url,{headers: {'Content-Type': 'application/json'}})
      .then(response =>  response.json())
      .then(result => {return this.log_audit_data=result})

    this.sendLogAuditLogToBemTable()
    console.log("Ending LogAudit");
  }

  sendLogAuditLogToBemTable(){
    this.interationService.sendBEMLOGAUDIT(this.log_audit_data)
  }
}
