import { Component, OnInit } from '@angular/core';
import { CvluisfernandoService } from '../services/cvluisfernando.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public cv: CvluisfernandoService) { }

  ngOnInit(): void {
  }

}
