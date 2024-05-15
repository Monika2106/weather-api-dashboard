import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  items: any[] = [];
  activeIndex: number = 0;

  ngOnInit() {
    this.items = [/* Add your items here */];
    setInterval(() => this.next(), 5000);
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }
}
