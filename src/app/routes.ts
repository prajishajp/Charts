import { ModuleWithProviders } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  

import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';  
import { DataComponent } from './data/data.component';

  
const appRoutes: Routes = [  
  
    // Default Page   
    { path: '', redirectTo:'/Bubble',pathMatch:'full' },  
    
    
    { path: 'Bubble', component: BubbleChartComponent },
   
    { path: 'Data', component: DataComponent }, 
     
];  
  
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);  