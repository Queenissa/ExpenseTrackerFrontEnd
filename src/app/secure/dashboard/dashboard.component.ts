import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any;

  public chartType: string = 'pie';

  public yesterdayChartLabels: any = ['Clothing', 'Electricity Bill', 'Food', 'Personal Care', 'Phone Bill', 'Savings', 'Transportation', 'Water Bill'];
  public weeklyChartLabels: any = ['Clothing', 'Electricity Bill', 'Food', 'Personal Care', 'Phone Bill', 'Savings', 'Transportation', 'Water Bill'];
  public monthlyChartLabels: any = ['Clothing', 'Electricity Bill', 'Food', 'Personal Care', 'Phone Bill', 'Savings', 'Transportation', 'Water Bill'];
  public yearlyChartLabels: any = ['Clothing', 'Electricity Bill', 'Food', 'Personal Care', 'Phone Bill', 'Savings', 'Transportation', 'Water Bill'];

  public chartColors: any = [
    {
      backgroundColor: ['#46BFBD', '#F7464A', '#FDB45C', '#949FB1', '#ffd700', '#00b300', '#4D5360', '#0099e6'],
      borderWidth: 2,
    }
  ];

  //Daily Expenses

  public yesterdayChartDataSets: any = [
    { data: [0] }
  ];

  public yesterdayChartOptions: any = {
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
  yesterdayExpensesAmount : number;
  //Weekly Expenses

  public weeklyChartDataSets: Array<any> = [
    { data:[0] }
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
  weeklyExpensesAmount : number;
  //Monthly Expenses

  public monthlyChartDataSets: Array<any> = [
    { data: [0] }
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
  monthlyExpensesAmount : number;
  //Yearly Expenses

  public yearlyChartDataSets: Array<any> = [
    { data: [0] }
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
  yearlyExpensesAmount : number;
  //EventEmitters

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.user = localStorage.getItem('user');

    this.http.get<any>('http://localhost:8000/chart/yesterday', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (result) => {
        var expenses = []
        var labels = []
        for (let index = 1; index < result.length; index++) {
            labels.push(result[index][0])
            expenses.push(result[index][1]) 
        }
        this.yesterdayChartDataSets[0].data = expenses;
        this.yesterdayChartLabels = labels
        
        var sum = expenses.reduce((a, b) => a + b, 0);
        
        this.yesterdayExpensesAmount  = sum;
      }
      ,
      error => {
        console.log(error)
      }
    )



    

    this.http.get<any>('http://localhost:8000/chart/weekly', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (result) => {
        var expenses = []
        var labels = []
        for (let index = 1; index < result.length; index++) {
            labels.push(result[index][0])
            expenses.push(result[index][1]) 
        }
        this.weeklyChartDataSets[0].data = expenses;
        this.weeklyChartLabels = labels
        
        var sum = expenses.reduce((a, b) => a + b, 0);
        
        this.weeklyExpensesAmount  = sum;
      }
      ,
      error => {
          console.log(error)
      }
    )

    this.http.get<any>('http://localhost:8000/chart/monthly', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (result) => {
        var expenses = []
        var labels = []
        for (let index = 1; index < result.length; index++) {
            labels.push(result[index][0])
            expenses.push(result[index][1]) 
        }
        this.monthlyChartDataSets[0].data = expenses;
        this.monthlyChartLabels = labels
        
        var sum = expenses.reduce((a, b) => a + b, 0);
        
        this.monthlyExpensesAmount  = sum;
      }
      ,
      error => {
          console.log(error)
      }
    )

    this.http.get<any>('http://localhost:8000/chart/yearly', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (result) => {
        var expenses = []
        var labels = []
        for (let index = 1; index < result.length; index++) {
            labels.push(result[index][0])
            expenses.push(result[index][1]) 
        }
        this.yearlyChartDataSets[0].data = expenses;
        this.yearlyChartLabels = labels
        
        var sum = expenses.reduce((a, b) => a + b, 0);
        
        this.yearlyExpensesAmount  = sum;
      }
      ,
      error => {
          console.log(error)
      }
    )
  }
} 