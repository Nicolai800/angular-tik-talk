import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dnd]',
})
export class DndDirective {
  @HostBinding('class.fileover')
  fileover = false;

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileover = true;
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileover = false;
  }
  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileover = false;
  }
}
