import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { PredictedInvestment } from 'src/models/PredictedInvestment';

@Component({
  selector: 'app-predicted-investments',
  templateUrl: './predicted-investments.component.html',
  styleUrls: ['./predicted-investments.component.css']
})
export class PredictedInvestmentsComponent implements OnInit {

  public investmentsData: PredictedInvestment[]
  public title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = "Predicted Investments Graph"

    // Data
    this.investmentsData = [
      {
        month: "January",
        minPercent: 40,
        maxPercent: 80
      },
      {
        month: "February",
        minPercent: 20,
        maxPercent: 45
      },
      {
        month: "March",
        minPercent: 55,
        maxPercent: 90
      },
      {
        month: "April",
        minPercent: 30,
        maxPercent: 50
      },
      {
        month: "May",
        minPercent: 50,
        maxPercent: 70
      },
    ];

    // Initialize the echarts instance based on the prepared dom
    var myChart = echarts.init(document.getElementById('predicted-investments'), null, {
      width: 600,
      height: 400
    });
  
    let serieDatas = this.getSerieDatas()

    // Specify the configuration items and data for the chart
    var option = {
      title: {
        text: 'Predicted investments',
        left: 'center'
      },    
      xAxis: {
        type: 'category',
        data: this.getMonth(),
        axisLabel: {
          rotate: '45'
        },
        axisLine: {
          symbol: 'arrow',
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: "{value} %"
        },
        axisLine: {
          symbol: 'arrow'
        },
      },
      series: [
        {
          name: 'placeholder',
          type: 'bar',
          stack: 'Total',
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          },
          emphasis: {
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            }
          },
          data: this.getMinPercent()
        },
        {
          name: 'Predicted Investments Negative',
          type: 'bar',
          stack: 'Total',
          data: serieDatas.serieDataNegatives,
          itemStyle: {
            borderColor: 'red',
            color: 'red'
          },     
        },
        {
          name: 'Predicted Investments Positive',
          type: 'bar',
          stack: 'Total',
          data: serieDatas.serieDataPositivies,
          itemStyle: {
            borderColor: 'black',
            color: 'black'
          },      
        }
      ]
    };

    // Display the chart using the configuration items and data just specified.
    myChart.setOption(option);
  }

  private getSerieDatas() {
    let serieDataPositivies: number[] = [];
    let serieDataNegatives: number [] = [];

    for (var index in this.investmentsData) {
      if (this.investmentsData[index].minPercent < 50 && this.investmentsData[index].maxPercent > 50) {
        serieDataNegatives[index] = 50 - this.investmentsData[index].minPercent;
        serieDataPositivies[index] = this.investmentsData[index].maxPercent - 50;
      } else if (this.investmentsData[index].minPercent < 50) {
        serieDataNegatives[index] = this.investmentsData[index].maxPercent - this.investmentsData[index].minPercent;
      } else {
        serieDataPositivies[index] = this.investmentsData[index].maxPercent - this.investmentsData[index].minPercent;
      }
    }

    return {
      serieDataNegatives,
      serieDataPositivies
    }
  }

  private getMinPercent(): number[] {
    return this.investmentsData.map((investment: PredictedInvestment) => investment.minPercent)
  }

  private getMonth(): string[] {
    return this.investmentsData.map((investment: PredictedInvestment) => investment.month)
  }

  public toogleSection(event: any): void {
    const section: HTMLElement = event['target']['parentElement']['parentElement']
    section.classList.toggle('report-section--minified')
  }
}
