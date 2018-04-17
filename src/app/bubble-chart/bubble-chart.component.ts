import { Component, OnInit } from '@angular/core';
import FusionCharts = require('fusioncharts');
import { RouterModule, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

   
  id = 'AngularChart6';  
  width = 600;  
  height = 400;  
  type = 'bubble';  
  dataFormat = 'json';  
  dataSource;  
  events;
  
  constructor(private router:Router) {   
    
   
    

    
  }  
  

  ngOnInit() {

    this.events=  {
        
        
        'dataplotClick': function(evt, args) {
          console.log(evt);
  
          console.log(args);
          //document.write(args.toolText);
          // console.log(this.toolText);
          //alert(args.toolText);
          
          console.log(args.toolText);
          
          localStorage.setItem("bubble",args.displayValue);
          
          

          
          
            },
           
          }

          this.dataSource ={  
        
            "chart": {  
                "theme": "fint",  
                "caption": "Live Dashboard",  
                "xAxisMinValue": "0",  
                "xAxisMaxValue": "100",  
                "yAxisMinValue": "0",  
                "yAxisMaxValue": "30000",  
                "plotFillAlpha": "70",  
                "plotFillHoverColor": "#ADFF2F",  
                "showPlotBorder": "0",  
                "xAxisName": "Percentage",  
                "yAxisName": "Count",  
                "numDivlines": "2",  
                //Showing the labels on Bubbles  
                "showValues": "1",  
                "showTrendlineLabels": "0",  
                "plotTooltext": "$name : Transaction Per Day - $zvalue%"  
                
            }, 
           
             
            "categories": [  
                {  
                    "category": [  
                        {  
                            "label": "10",  
                            "x": "0"  
                        },   
                        {  
                            "label": "20",  
                            "x": "20",  
                            "showverticalline": "1"  
                        },   
                        {  
                            "label": "30",  
                            "x": "40",  
                            "showverticalline": "1"  
                        },   
                        {  
                            "label": "40",  
                            "x": "60",  
                            "showverticalline": "1"  
                        },   
                        {  
                            "label": "50",  
                            "x": "80",  
                            "showverticalline": "1"  
                        },   
                        {  
                            "label": "60+",  
                            "x": "100",  
                            "showverticalline": "1"  
                        }  
                    ]  
                }  
            ],  
            "dataset": [  
                {  
                    "color":"#00BFFF",  
                    "data": [  
                        {  
                            "x": "20",  
                            "y": "12000",  
                            "z": "24",  
                            "name": "Asia" ,
                            
                            
                        },   
                        {  
                            "x": "60",  
                            "y": "15000",  
                            "z": "26",  
                            "name": "Paris",
                            
                        },   
                        {  
                            "x": "80",  
                            "y": "19000",  
                            "z": "19",  
                            "name": "China",
                            
                             
                        },  
                        {  
                            "x": "45",  
                            "y": "9000",  
                            "z": "8",  
                            "name": "Hong Kong",
                              
                        },  
                        {  
                            "x": "33",  
                            "y": "7500",  
                            "z": "5",  
                            "name": "Japan" ,
                             
                        },   
                        {  
                            "x": "42",  
                            "y": "12000",  
                            "z": "10",  
                            "name": "Mumbai",
                              
                        },   
                        {  
                            "x": "55",  
                            "y": "43000",  
                            "z": "9",  
                            "name": "Bucharest",
                             
                        }  
                    ]  
                }  
            ],  
    
           
    
            "trendlines": [  
                {  
                    "line": [  
                        {  
                            "startValue": "20000",  
                            "endValue": "30000",  
                            "isTrendZone": "1",  
                            "color": "#aaaaaa",  
                            "alpha": "14"  
                        },   
                        {  
                            "startValue": "10000",  
                            "endValue": "20000",  
                            "isTrendZone": "1",  
                            "color": "#aaaaaa",  
                            "alpha": "7"  
                        }  
                    ]  
                }  
            ]  
        } 
  }

 //testfn(){
    // console.log(localStorage.getItem('bubble'));}
  onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
  
    let currentUrl = this.router.url + '?';
  
    this.router.navigateByUrl(currentUrl)
      .then(() => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      });
      
    }
  
}
