import { Component, Input, OnInit } from '@angular/core';
import { all_projects } from '../../app.component';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.sass'],
})
export class FeaturedComponent implements OnInit {
  projects = [];

  constructor() {}

  ngOnInit(): void {
    for (var i = 0; i < all_projects.length; i++) {
      this.projects.push(all_projects[i]);
    }
  }
}
