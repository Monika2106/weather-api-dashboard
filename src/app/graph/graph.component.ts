import { Component, Input, OnChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule,NgxChartsModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
  template: `
    <div class="w-full max-w-xl mx-auto">
      <canvas baseChart
              [datasets]="lineChartData"
              [labels]="lineChartLabels"
              [options]="lineChartOptions"
              [legend]="lineChartLegend"
              [chartType]="lineChartType"
              class="bg-white rounded-lg shadow-md"></canvas>
    </div>
  `,
})
export class GraphComponent {
  @Input() lineChartData: any[] = [];
  @Input() lineChartLabels: string[] = [];
  @Input() lineChartOptions: any = {};
  @Input() lineChartLegend: boolean = true;
  @Input() lineChartType: string = 'line';
}