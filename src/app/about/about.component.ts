import { Component, OnInit } from '@angular/core';
import { CvluisfernandoService } from '../services/cvluisfernando.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public cv: CvluisfernandoService) { }

  ngOnInit(): void {
  }

}
