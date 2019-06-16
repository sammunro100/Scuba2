import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input()showImageViewer;
  @Input()imgSrc: string;
  @Output()emitEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeImageViewer(){
    this.showImageViewer = false;
    this.emitEvent.emit();
  }
}
