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
    category: 'AUTOMATION',
    title: 'TWITTER ACCOUNT GENERATOR',
    header: 'TWITTER ACCOUNT GENERATOR USING SELENIUM IN PYTHON',
    image: 'assets/images/portfolio/computer/twitter.jpg',
    details:
      'One day I woke up with the desire to  create bot accounts for the most important Social Media Websites.' +
      " But I didn't just create another auto-like or tweet bot. I created a Twitter bot that creates multiple Twitter accounts.",
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/twitter-bot-enhanced.py',
  },
  {
    category: 'AUTOMATION',
    title: 'TYPERACER BOT',
    header: 'TYPERACER BOT USING SELENIUM IN PYTHON',
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
    header: 'DUOLINGO STORIES USING SELENIUM IN PYTHON',
    image: 'assets/images/portfolio/computer/duolingo.jpg',
    details:
      'I once wanted to earn an achievement on the popular language learning app, Duolingo.' +
      ' To do that, I had to finish first on the highest leaderboard and it was a task that requiered a lot of time.' +
      ' Fortunately I managed to create a bot that solved Duolingo Stories for me, and I got the achievement I wanted.',
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/duolingo.py',
  },
  {
    category: 'AUTOMATION',
    title: 'INSTAGRAM ACCOUNT GENERATOR',
    header: 'INSTAGRAM ACCOUNT GENERATOR USING SELENIUM IN PYTHON',
    image: 'assets/images/portfolio/computer/instagram.jpg',
    details:
      'One day I woke up with the desire to  create bot accounts for the most important Social Media Websites.' +
      " But I didn't just create another auto-like or comment bot. I created an Instagram bot that creates multiple Instagram accounts.",
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/instagram-bot-enhanced.py',
  },
  {
    category: 'WEB BASED',
    title: 'FINEAS RACING TEAM',
    header: 'DESIGN AND DEVELOPMENT OF THE FRT WEBSITE ON ANGULAR',
    image: 'assets/images/portfolio/computer/fineasracingteam.jpg',
    details:
      'With the help of my good friend George Stinis, we designed the website of the Fineas Racing Team, a family of' +
      ' young people who tried to compete on the worldwide competition of driverless formula' +
      ' The first version of the page was created using wordpress, however it was quite slow, so I designed ' +
      ' the second version on Angular.',
    repository_link: 'https://github.com/Gsak3l/fineasWebSite',
  },
  {
    category: 'WEB BASED',
    title: 'IEEE IHU WEBSITE',
    header:
      'DESIGN AND CO-DEVELOPMENT OF THE IEEE INTERNATIONAL HELLENIC UNIVERSITY STUDENT BRANCH WEBSITE ON VUE',
    image: 'assets/images/portfolio/computer/ihuthess.jpg',
    details:
      'Being in the position "Website Master" for the IEEE International Hellenic University Student Branch, means I had to ' +
      ' maintain the old wordpress website. But the old website was not looking good enough, so me and George Apostolopoulos' +
      ' developed the updated version using VUE. The new version is faster, better looking, and much more user-friendly thanks to Netlify CMS.',
    repository_link: 'https://github.com/Gsak3l/sb-website',
  },
  {
    category: 'APPLICATIONS',
    title: 'UNIVERSITY LECTURES PICKER',
    header: 'CO-DEVELOPMENT OF A COURSE PICKER APPLICATION ON JAVA',
    image: 'assets/images/portfolio/computer/pithiav2.jpg',
    details:
      'During the course of software engineering, me, George Stinis, and Pantelis Papadopoulos were asked to develop a new' +
      ' version of the application we were using, to select the courses we want to attend. Creating this applicaiton took a while' +
      ' because we had to meet some criteria (we were not allowed to use databases) but we are happy with the results',
    repository_link: 'https://github.com/Gsak3l/university-courses-picker',
  },
];
