import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { Investment } from 'src/models/Investment';

@Component({
  selector: 'app-investments-targets',
  templateUrl: './investments-targets.component.html',
  styleUrls: ['./investments-targets.component.css']
})
export class InvestmentsTargetsComponent implements OnInit {

  public investmentsData: Investment[]
  public title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = "Investments Targets Graph"

    // Data
    this.investmentsData = [
      {
        company: "Cherry Company",
        investment: "Investment1",
        amount: 7000
      },
      {
        company: "Pear Company",
        investment: "Investment2",
        amount: -3200
      },
      {
        company: "Peach Company",
        investment: "Investment3",
        amount: 8000
      },
      {
        company: "Banana Company",
        investment: "Investment4",
        amount: 10000
      },
    ];

    // Initialize the echarts instance based on the prepared dom
    var myChart = echarts.init(document.getElementById('investments-targets'), null, {
      width: 600,
      height: 400
    });

    // Initialize series data
    let seriesData = this.investmentsData.map((investment: Investment) => {
      return {
          value: investment.amount,
          name: investment.company,
          investNumber: investment.investment,
          itemStyle: {
              color: this.getColorAmount(investment.amount)
          },
          label: {
            position : investment.amount >= 0 ? 'right' : 'left'
          }
      }
    });
      
    // Specify the configuration items and data for the chart
    var option = {
      title: {
        text: 'Investments targets',
        left: 'center'
      },    
      tooltip: {
        formatter: function (params) {
          return `${params.name}<br/>
          ${params.data.investNumber}<br/>
          ${params.data.value}`
        }
      },
      xAxis: {
        axisLine: {
          symbol: 'arrow',
          lineStyle: {
            type: 'solid'
          }
        },
        axisLabel: {
          formatter: "{value} €"
        },
      },
      yAxis: {
        type: 'category',
        axisLine: {
          symbol: 'arrow'
        }
      },
      series: [
        {
          name: 'investments',
          type: 'bar',
          data: seriesData,
          label: {
            show: true,
            formatter: function(d) {
              return Math.abs(d.data.value)
            }
          }
        }
      ]
    };

    // Display the chart using the configuration items and data just specified.
    myChart.setOption(option);
  }

  private getColorAmount(amount: number): string {
    return amount >= 0 ? 'blue' : 'green'
  }

  public toogleSection(event: any): void {
    const section: HTMLElement = event['target']['parentElement']['parentElement']
    section.classList.toggle('report-section--minified')
  }
}
