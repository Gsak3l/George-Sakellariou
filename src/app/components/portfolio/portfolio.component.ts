import { all_projects } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
})
export class PortfolioComponent implements OnInit {
  projects = [];

  constructor() {}

  ngOnInit(): void {
    for (var i = 0; i < all_projects.length; i++) {
      this.projects.push(all_projects[i]);
    }
    /*
    for (let i = this.projects.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.projects[i], this.projects[j]] = [
        this.projects[j],
        this.projects[i],
      ];
    }*/
  }
}
