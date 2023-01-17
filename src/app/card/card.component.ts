import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() course: Course;

  @Input() cardIndex: number;

  @Output('customEventClicked') customEventEmitter = new EventEmitter<Course>();

  onCustomButtonClicked() {
    console.log('Card component - custom browser event clicked...');

    this.customEventEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
}
