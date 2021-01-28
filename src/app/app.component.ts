import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'george-sakellariou';
}

export let all_projects = [
  {
    category: 'WEB DESIGN',
    title: 'FINEAS RACING TEAM',
    header: 'DESIGN AND DEVELOPMENT',
    details:
      'I designed with the help of George Stinis the website for the FRT (Fineas Racing Team), where many ambitious people' +
      'decided to try building a driverless vehicle. Unfortunately the Project was shut down after two years of hard work.',
    details_link: 'https://fineasracingteam.netlify.app/',
  },
  {
    category: 'WEB DESIGN',
    title: 'FINEAS RACING TEAM',
    header: 'DESIGN AND DEVELOPMENT',
    details:
      'I designed with the help of George Stinis the website for the FRT (Fineas Racing Team), where many ambitious people' +
      'decided to try building a driverless vehicle. Unfortunately the Project was shut down after two years of hard work.',
    details_link: 'https://fineasracingteam.netlify.app/',
  },
  {
    category: 'WEB DESIGN',
    title: 'FINEAS RACING TEAM',
    header: 'DESIGN AND DEVELOPMENT',
    details:
      'I designed with the help of George Stinis the website for the FRT (Fineas Racing Team), where many ambitious people' +
      'decided to try building a driverless vehicle. Unfortunately the Project was shut down after two years of hard work.',
    details_link: 'https://fineasracingteam.netlify.app/',
  },
];
