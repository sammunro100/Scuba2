import { NameService } from './../name.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dive-information',
  templateUrl: './dive-information.component.html',
  styleUrls: ['./dive-information.component.scss']
})
export class DiveInformationComponent implements OnInit {

  locoName: string = "Cornwall"
  showImageViewer: boolean;
  imgSrc: string;

  constructor(
    private readonly NameService: NameService
  ) { }

  ngOnInit() {
    this.NameService.getLocoName.subscribe((res)=>{
      if(res !=null){
        this.locoName = res;
      }
    })
  }

  toggleImagePreview(imgSrc: string){
    this.imgSrc = imgSrc;
    this.showImageViewer = !this.showImageViewer;
  }
}
