import { all_projects } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
})
export class PortfolioComponent implements OnInit {
  all_projects_2 = [];
  projects = [];

  constructor() {}

  ngOnInit(): void {
    for (var i = 0; i <= all_projects.length; i++) {
      this.all_projects_2.push(all_projects[i]);
    }
    var flag = true;
    var random = 0;
    while (flag) {
      try {
        random = Math.floor(Math.random() * all_projects.length);
        this.projects.push(this.all_projects_2[random]);
        this.all_projects_2.splice(random, 1);
        if (this.all_projects_2.length == 0) {
          flag = false;
        }
      } catch (e) {
        console.log('How you doing?');
      }
    }
    console.log(this.projects);
  }
}
