import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
  
// To use Material Component  
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatMenuModule } from '@angular/material';  
import { AppComponent } from './app.component';  
  
// To use Animations  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
  
// For Routing Purpose  
import { routing } from './routes';  
  
// For FusionChart   
import * as FusionCharts from 'fusioncharts';  
import * as Charts from 'fusioncharts/fusioncharts.charts';  
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';  
import { FusionChartsModule } from 'angular4-fusioncharts';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { DataComponent } from './data/data.component';  
import { Routes } from '@angular/router';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);  
const appRoutes: Routes = [  
  
  // Default Page   
  { path: '', redirectTo:'/Bubble',pathMatch:'full' },  
  
  
  { path: 'Bubble', component: BubbleChartComponent }, 
  { path: 'Data', component: DataComponent }, 
   
];   
  
@NgModule({  
  declarations: [  
    AppComponent, BubbleChartComponent, DataComponent,  
   ],  
  imports: [  
    routing,  
    BrowserModule,  
    MatCardModule,  
    MatToolbarModule,  
    MatButtonModule,  
    MatMenuModule,  
    FusionChartsModule,  
    BrowserAnimationsModule  
  ],  
  exports: [  
    BrowserModule,  
    MatCardModule,  
    MatToolbarModule,  
    MatButtonModule,  
    MatMenuModule  
  ],  
  providers: [  
  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  