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
  {
    category: 'WEB BASED',
    title: 'ROCK PAPER SCISSORS',
    header: 'DEVELOPMENT OF A SIMPLE ROCK PAPER SCISSORS GAME USING JAVASCRIPT',
    image: 'assets/images/portfolio/computer/rockpaperscissors.jpg',
    details:
      'I enjoy playing simple old-school games like Rock-Paper-Scissors or Tic-Tac-Toe or UNO, so I decided to create' +
      ' a simple Rock-Paper-Scissors game that randomly picks one move over the other two.',
    repository_link: 'https://github.com/Gsak3l/rock-paper-scissors-game',
  },
  {
    category: 'WEB BASED',
    title: 'UNO CARD GAME',
    header: 'DEVELOPMENT OF A UNO CARD GAME USING PHP JAVASCRIPT AND MYSQL',
    image: 'assets/images/portfolio/computer/uno.jpg',
    details:
      'I enjoy playing simple old-school games like Rock-Paper-Scissors or Tic-Tac-Toe or UNO, so I decided to create' +
      ' a multiplayer UNO card game, where two people from different computers can play with each other.',
    repository_link: 'https://github.com/Gsak3l/UnoCardGame',
  },
  {
    category: 'WEB BASED',
    title: 'RECIPE APP',
    header:
      'DEVELOPMENT OF A RECIPE APP THAT UPDATES RECIPES USING REACT AND A RECIPE API',
    image: 'assets/images/portfolio/computer/recipe.jpg',
    details:
      'Development of a simple application that displays some recipes based on the search keywords provided' +
      " by the user. This app was made in order to undersand how to call API's",
    repository_link: 'https://github.com/Gsak3l/Recipe-App',
  },
  {
    category: 'AUTOMATION',
    title: 'AMAZON ITEM PRICE SCRIPT',
    header:
      'SCRIPT THAT NOTIFIES A USER, WHEN THE GIVEN ITEM REACHES A CERTAIN PRICE',
    image: 'assets/images/portfolio/computer/amazon.jpg',
    details:
      'A simple script that always run on my computer in order to never miss a good deal from the items that ' +
      ' I already want. It notifies me through email whenever the price of my desired items drop enough.',
    repository_link: 'https://github.com/Gsak3l/Python-Price-Script-for-Amazon',
  },
  {
    category: 'WEB BASED',
    title: 'TIC-TAC-TOE',
    header: 'DEVELOPMENT OF A COMPLEX TIC-TAC-TOE GAME USING JAVASCRIPT',
    image: 'assets/images/portfolio/computer/tictactoe.jpg',
    details:
      'I enjoy playing simple old-school games like Rock-Paper-Scissors or Tic-Tac-Toe or UNO, so I decided to create' +
      ' a quite complex TIC-TAC-TOE game, where a user plays against a computer and it is impossible for him to win.',
    repository_link: 'https://github.com/Gsak3l/tic-tac-toe',
  },
  {
    category: 'WEB BASED',
    title: 'HOUSE TRADING APP',
    header: 'DEVELOPMENT  OF A HOUSE TRADING APPLICATION',
    image: 'assets/images/portfolio/computer/airbnb.jpg',
    details:
      'Development of the front-end part of a web application that allows users from different countries to trade their' +
      '  house with people from other countries, or rent it for a price',
    repository_link: 'https://github.com/Gsak3l/airbnb-clone-app',
  },
];
