import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule,FormsModule,BsDatepickerModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  @Output() dateChange = new EventEmitter<Date>();
  selectedDate: Date = new Date();  // Initialize with current date

  onDateChange(event: any) {
    this.dateChange.emit(event);
  }
}
