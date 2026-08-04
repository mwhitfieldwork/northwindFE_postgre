import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../../utilities/services/dashboard/dashboard.service';
import { BarOrderDetail } from '../../../utilities/models/bar-order-detail';
import { map } from 'rxjs';

@Component({
  selector: 'app-custom-horizontal-graph',
  standalone: true,
  imports: [],
  templateUrl: './custom-horizontal-graph.component.html',
  styleUrl: './custom-horizontal-graph.component.scss'
})
export class CustomHorizontalGraphComponent   implements OnInit {
  bars:BarOrderDetail[] = [];
  totalUnitPrice = 0;
 private dashboardService = inject(DashboardService)

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails(): void {
    this.dashboardService.getOrderDetails()
      .pipe(
        map((orders: BarOrderDetail[]) => {
  
          // PASS 1: compute total
          const total = orders.reduce((sum, order) => sum + order.unitPrice, 0);
          const bgColors = [
            '#ede9fe',
            '#d8b4fe', 
            '#e6c9f5', 
            '#c4a2f3', 
            '#a855f7', 
            '#6b21a8', 
            '#581c87',
            '#4c1d95'  
          ];
          this.totalUnitPrice = total;
          
          // PASS 2: compute width per order
          const transformed = orders.map((order, index) => ({
            ...order,
            pkID: index + 1,
            width: Math.round(((order.unitPrice * 4 )/ total) * 100),
            bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
          }));
  
          return transformed;
        })
      )
      .subscribe(transformedOrders => {
        this.bars = transformedOrders;
      });
  }
    

}
