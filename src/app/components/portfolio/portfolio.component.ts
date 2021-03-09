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
    for (let i = this.projects.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.projects[i], this.projects[j]] = [
        this.projects[j],
        this.projects[i],
      ];
    }
  }
  portfolio_clicked(event, item) {
    var details = document.getElementById('details');
    var lis = '';
    var buttons = '';
    details.getElementsByTagName('h2')[0].innerText = item['header'];
    details.getElementsByTagName('p')[0].innerText = item['details'];
    details.getElementsByTagName('img')[0].src = item['image'];
    for (var i = 0; i < item['tags'].length; i++) {
      lis += '<li><span>' + item['tags'][i] + '</span></li>';
    }
    details.getElementsByTagName('ul')[0].innerHTML = lis;
    if (item['repository_link'] && item['live_demo']) {
      buttons +=
        '<a class="btn btn-fill" href="' +
        item['repository_link'] +
        '" style="margin-right: 5px;" target="_blank">View Repository</a>' +
        '<a class="btn btn-fill" href="' +
        item['live_demo'] +
        '" target="_blank">Live Demo</a>';
    } else if (item['repository_link']) {
      buttons +=
        '<a class="btn btn-fill" href="' +
        item['repository_link'] +
        '" style="margin-right: 5px;" target="_blank">View Repository</a>';
    } else if (item['live_demo']) {
      buttons =
        '<a class="btn btn-fill" href="' +
        item['live_demo'] +
        '" target="_blank">Live Demo</a>';
    }
    document.getElementById('details_links').innerHTML = buttons;
  }
}
