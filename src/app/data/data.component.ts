import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  id = 'AngularChart6';  
  width = 600;  
  height = 400;  
  type = 'bar3d';  
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

          this.dataSource = {  
            "chart": {  
              "caption": "Data generated per Country",  
              "subcaption": "(Count)",  
              "yaxisname": "Rate",  
              "numbersuffix": "%",  
              "basefontsize": "12",  
              "basefontcolor": "#194920",  
              "valuefontcolor": "#194920",  
              "canvasBgColor": "#f3f5f6",  
              "canvasBgAlpha": "100",  
              "bgColor": "#f3f5f6",  
              "BgAlpha": "100",  
              "palettecolors": "#00BFFF",  
              "plottooltext": "$label Rate of Unemployment : $datavalue",  
              "theme": "ocean"  
          },  
          "data": [  
              {  
                  "label": "Country A",  
                  "value": "5.4"  
              },  
              {  
                  "label": "Country B",  
                  "value": "1.7"  
              },  
              {  
                  "label": "Country C",  
                  "value": "3.8"  
              },  
              {  
                  "label": "Country D",  
                  "value": "2.8"  
              },  
              {  
                  "label": "Country E",  
                  "value": "5.0"  
              },  
              {  
                  "label": "Country F",  
                  "value": "2.4"  
              },  
              {  
                  "label": "Country G",  
                  "value": "8.0"  
              },  
              {  
                  "label": "Country H",  
                  "value": "1.5"  
              }  
          ]  
          }  
        }  
 
  
  
}