import { Component, OnInit } from '@angular/core';
import {InterationService} from "../interation.service";


@Component({
  selector: 'app-init-resume',
  templateUrl: './init-resume.component.html',
  styleUrls: ['./init-resume.component.css']
})
export class InitResumeComponent implements OnInit {

  private bem_metricst_url: string ="http://bkp0desb162.bankinter.bk:8580/bem/";
  metrics: any
  seals_value: string

  constructor(private interationService: InterationService) { }

  async ngOnInit() {
    this.fetchMetrics()
  }


  async fetchMetrics(){
    console.log("Starting Metrics");

    await fetch(this.bem_metricst_url,{headers: {'Content-Type': 'application/json'}})
      .then(response =>  response.json())
      .then(result => {return this.metrics=result})

    console.log(JSON.stringify(this.metrics))
    //this.sendMetricsToBemTable()

    this.dealWithMetrics()

    console.log("Ending Metrics")
  }

  async dealWithMetrics(){
    this.seals_value = "100"
  }

  async sendMetricsToBemTable(){

    this.metrics=this.metrics.filter(value => value.metricType=="BYSERVICE" && value.state=="SUCCESS")

    this.interationService.sendMetricsToInit(this.metrics)
  }
}
