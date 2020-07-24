import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'links-header',
  templateUrl: './links-header.component.html',
  styleUrls: ['./links-header.component.scss']
})
export class LinksHeaderComponent {
  @Input() header: string;
  @Output() editLinksToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addLinkToggle: EventEmitter<null> = new EventEmitter<any>();
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  isEditing = false;

  editLinks() {
    this.editLinksToggle.emit(true);
    this.isEditing = true;
  }

  cancelEditing() {
    this.editLinksToggle.emit(false);
    this.isEditing = false;
  }

  addLink = () => this.addLinkToggle.emit();

  captureFilter = (value: string) => this.filter.emit(value);
}
