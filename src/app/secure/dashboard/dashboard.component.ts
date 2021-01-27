import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public chartType: string = 'pie';

  public chartLabels: Array<any> = ['Clothing', 'Electricity Bill', 'Food', 'Personal Care', 'Phone Bill', 'Savings', 'Transportation', 'Water Bill'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#46BFBD', '#F7464A', '#FDB45C', '#949FB1', '#ffd700', '#00b300', '#4D5360', '#0099e6'],
      borderWidth: 2,
    }
  ];

  //Daily Expenses

  public dailyChartDatasets: Array<any> = [
    { data: [150, 300, 100, 100, 100, 120, 100, 200], label: 'Daily Expenses' }
  ];

  public dailyChartOptions: any = {
    responsive: true, 
    title: {
      display: true,
      text: 'Yesterday',
      fontSize: 17
    },
    legend: {
      position: 'right'
    }
  };

  public dailyExpensesAmount: number = 0;

  //Weekly Expenses

  public weeklyChartDatasets: Array<any> = [
    { data: [150, 300, 100, 100, 100, 120, 100, 200], label: 'Last 7 days Expenses' }
  ];

  public weeklyChartOptions: any = {
    responsive: true, 
    title: {
      display: true,
      text: 'Last 7 days',
      fontSize: 17
    },
    legend: {
      position: 'right'
    }
  };

  //Monthly Expenses

   public monthlyChartDatasets: Array<any> = [
    { data: [150, 300, 100, 100, 100, 120, 100, 200], label: 'Monthly Expenses' }
  ];

  public monthlyChartOptions: any = {
    responsive: true, 
    title: {
      display: true,
      text: 'Last 30 days',
      fontSize: 17
    },
    legend: {
      position: 'right'
    }
  };

  //Yearly Expenses

  public yearlyChartDatasets: Array<any> = [
    { data: [150, 300, 100, 100, 100, 120, 100, 200], label: 'Yearly Expenses' }
  ];

  public yearlyChartOptions: any = {
    responsive: true, 
    title: {
      display: true,
      text: 'Current Year Expenses',
      fontSize: 17
    },
    legend: {
      position: 'right'
    }
  };

  //EventEmitters
  
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }

  ngOnInit() {}
}