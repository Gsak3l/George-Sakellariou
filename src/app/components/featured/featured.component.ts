import { Component, Input, OnInit } from '@angular/core';
import { all_projects } from '../../app.component';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.sass'],
})
export class FeaturedComponent implements OnInit {
  project;
  random_number;
  constructor() {}

  ngOnInit(): void {
    this.project =
      all_projects[Math.floor(Math.random() * all_projects.length)];
  }
}
