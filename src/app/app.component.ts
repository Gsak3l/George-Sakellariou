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
    image: 'assets/images/portfolio/computer/fineasracingteam.jpg',
    details:
      'With the help of my good friend George Stinis, we designed the website of the Fineas Racing Team, a family of' +
      ' young people who tried to compete on the worldwide competition of driverless formula' +
      ' The first version of the page was created using wordpress, however it was quite slow, so I designed ' +
      ' the second version on Angular.',
    repository_link: 'https://github.com/Gsak3l/fineasWebSite',
  },
  {
    category: 'AUTOMATION',
    title: 'TWITTER ACCOUNT GENERATOR',
    header: 'TWITTER ACCOUNT GENERATOR USING SELENIUM',
    image: 'assets/images/portfolio/computer/twitter.jpg',
    details:
      'In 2019 I discovered my passion about automation. I really enjoy not having to do simple tasks like' +
      ' paying my bills by myself, but soon I started developing the other side of automation, the bot side. I wanted to ' +
      ' prove that I can create bots for all the Social Media webistes. My Twitter Account Generator was one of best bots I have made',
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/twitter-bot-enhanced.py',
  },
  {
    category: 'AUTOMATION',
    title: 'TYPERACER BOT',
    header: 'TYPERACER BOT USING SELENIUM',
    image: 'assets/images/portfolio/computer/typeracer.jpg',
    details:
      'Sometime in 2019, my friends and I were fighting about who can type faster that the others.' +
      ' We decided to compete against each other, after we trained ourselves for about a week. Even though' +
      ' I knew I would probably win this competition I could not risk it and I created this bot.',
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/typeracer.py',
  },
  {
    category: 'AUTOMATION',
    title: 'DUOLINGO STORIES BOT',
    header: 'DUOLINGO STORIES USING SELENIUM',
    image: 'assets/images/portfolio/computer/duolingo.jpg',
    details:
      'I once wanted to earn an achievement on the popular language learning app, Duolingo.' +
      ' To do that, I had to finish first on the highest leaderboard and it was a task that requiered a lot of time.' +
      ' Fortunately I managed to create a bot that solved Duolingo Stories for me, and I got the achievement I wanted.',
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/duolingo.py',
  },
];
