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
    id: 'tag',
    category: 'AUTOMATION',
    title: 'TWITTER ACCOUNT GENERATOR',
    header: 'TWITTER ACCOUNT GENERATOR USING SELENIUM IN PYTHON',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347502/really%20compresed%20personal%20website/portfolio/twitter_gjfc4d.jpg',
    details:
      'One day I woke up with the desire to  create bot accounts for the most important Social Media Websites.' +
      " But I didn't just create another auto-like or tweet bot. I created a Twitter bot that creates multiple Twitter accounts.",
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/twitter-bot-enhanced.py',
    data_filter: 'automation',
    tags: ['PYTHON', 'SELENIUM', 'MULTIPROCESSING', 'URLLIB'],
  },
  {
    id: 'tb',
    category: 'AUTOMATION',
    title: 'TYPERACER BOT',
    header: 'TYPERACER BOT USING SELENIUM IN PYTHON',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347502/really%20compresed%20personal%20website/portfolio/typeracer_v9xx5h.png',
    details:
      'Sometime in 2019, my friends and I were fighting about who can type faster that the others.' +
      ' We decided to compete against each other, after we trained ourselves for about a week. Even though' +
      ' I knew I would probably win this competition I could not risk it and I created this bot.',
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/typeracer.py',
    data_filter: 'automation',
    tags: ['PYTHON', 'SELENIUM'],
  },
  {
    id: 'dsb',
    category: 'AUTOMATION',
    title: 'DUOLINGO STORIES BOT',
    header: 'DUOLINGO STORIES USING SELENIUM IN PYTHON',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347500/really%20compresed%20personal%20website/portfolio/duolingo_jyrzbb.png',
    details:
      'I once wanted to earn an achievement on the popular language learning app, Duolingo.' +
      ' To do that, I had to finish first on the highest leaderboard and it was a task that requiered a lot of time.' +
      ' Fortunately I managed to create a bot that solved Duolingo Stories for me, and I got the achievement I wanted.',
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/duolingo.py',
    data_filter: 'automation',
    tags: ['PYTHON', 'SELENIUM'],
  },
  {
    id: 'iag',
    category: 'AUTOMATION',
    title: 'INSTAGRAM ACCOUNT GENERATOR',
    header: 'INSTAGRAM ACCOUNT GENERATOR USING SELENIUM IN PYTHON',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347500/really%20compresed%20personal%20website/portfolio/instagram_oyycuu.png',
    details:
      'One day I woke up with the desire to  create bot accounts for the most important Social Media Websites.' +
      " But I didn't just create another auto-like or comment bot. I created an Instagram bot that creates multiple Instagram accounts.",
    repository_link:
      'https://github.com/Gsak3l/Web-Scraping/blob/master/instagram-bot-enhanced.py',
    data_filter: 'automation',
    tags: ['PYTHON', 'SELENIUM', 'MULTIPROCESSING'],
  },
  {
    id: 'frt',
    category: 'WEB BASED',
    title: 'FINEAS RACING TEAM',
    header: 'DESIGN AND DEVELOPMENT OF THE FRT WEBSITE ON ANGULAR',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347500/really%20compresed%20personal%20website/portfolio/fineasracingteam_sj5igj.jpg',
    details:
      'With the help of my good friend George Stinis, we designed the website of the Fineas Racing Team, a family of' +
      ' young people who tried to compete on the worldwide competition of driverless formula' +
      ' The first version of the page was created using wordpress, however it was quite slow, so I designed ' +
      ' the second version on Angular.',
    repository_link: 'https://github.com/Gsak3l/fineasWebSite',
    live_demo: 'https://fineasracingteam.netlify.app/',
    data_filter: 'web',
    tags: ['ANGULAR 8 ', 'TYPESCRIPT', 'JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    id: 'iiw',
    category: 'WEB BASED',
    title: 'IEEE IHU WEBSITE',
    header:
      'DESIGN AND CO-DEVELOPMENT OF THE IEEE INTERNATIONAL HELLENIC UNIVERSITY STUDENT BRANCH WEBSITE ON VUE',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347500/really%20compresed%20personal%20website/portfolio/ihuthess_iwiim6.png',
    details:
      'Being in the position "Website Master" for the IEEE International Hellenic University Student Branch, means I had to ' +
      ' maintain the old wordpress website. But the old website was not looking good enough, so me and George Apostolopoulos' +
      ' developed the updated version using VUE. The new version is faster, better looking, and much more user-friendly thanks to Netlify CMS.',
    repository_link: 'https://github.com/Gsak3l/sb-website',
    live_demo: 'https://sakellariou-ieee.netlify.app/',
    data_filter: 'web',
    tags: ['VUE', 'JAVASCRIPT', 'SCSS'],
  },
  {
    id: 'ulp',
    category: 'APPLICATIONS',
    title: 'UNIVERSITY LECTURES PICKER',
    header: 'CO-DEVELOPMENT OF A COURSE PICKER APPLICATION ON JAVA',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347501/really%20compresed%20personal%20website/portfolio/pithiav2_ypyso5.png',
    details:
      'During the course of software engineering, me, George Stinis, and Pantelis Papadopoulos were asked to develop a new' +
      ' version of the application we were using, to select the courses we want to attend. Creating this applicaiton took a while' +
      ' because we had to meet some criteria (we were not allowed to use databases) but we are happy with the result.',
    repository_link: 'https://github.com/Gsak3l/university-courses-picker',
    data_filter: 'others',
    tags: ['JAVA', 'JAVA-SWING'],
  },
  {
    id: 'rps',
    category: 'WEB BASED',
    title: 'ROCK PAPER SCISSORS',
    header: 'DEVELOPMENT OF A SIMPLE ROCK PAPER SCISSORS GAME USING JAVASCRIPT',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347501/really%20compresed%20personal%20website/portfolio/rockpaperscissors_vx9fea.png',
    details:
      'I enjoy playing simple old-school games like Rock-Paper-Scissors or Tic-Tac-Toe or UNO, so I decided to create' +
      ' a simple Rock-Paper-Scissors game that randomly picks one move over the other two.',
    repository_link: 'https://github.com/Gsak3l/rock-paper-scissors-game',
    live_demo: 'https://gsak3l.github.io/rock-paper-scissors-game/index.html',
    data_filter: 'web',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
  {
    id: 'ucg',
    category: 'WEB BASED',
    title: 'UNO CARD GAME',
    header: 'DEVELOPMENT OF A UNO CARD GAME USING JAVASCRIPT, PHP AND MYSQL',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347502/really%20compresed%20personal%20website/portfolio/uno_xzq9gq.png',
    details:
      'I enjoy playing simple old-school games like Rock-Paper-Scissors or Tic-Tac-Toe or UNO, so I decided to create' +
      ' a multiplayer UNO card game, where two people from different computers can play with each other.',
    repository_link: 'https://github.com/Gsak3l/UnoCardGame',
    data_filter: 'web',
    tags: ['PHP', 'MYSQL', 'HTML', 'CSS', 'JAVASCRIPT'],
  },
  {
    id: 'ra',
    category: 'WEB BASED',
    title: 'RECIPE APP',
    header:
      'DEVELOPMENT OF A RECIPE APP THAT UPDATES RECIPES USING REACT AND A RECIPE API',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347501/really%20compresed%20personal%20website/portfolio/recipe_p02qvw.jpg',
    details:
      'Development of a simple application that displays some recipes based on the search keywords provided' +
      " by the user. This app was made in order to undersand how to call API's",
    repository_link: 'https://github.com/Gsak3l/Recipe-App',
    live_demo: 'https://gsak3l.github.io/Recipe-App/',
    data_filter: 'web',
    tags: ['REACT', 'JSX', 'CSS', 'HTML'],
  },
  {
    id: 'aips',
    category: 'AUTOMATION',
    title: 'AMAZON ITEM PRICE SCRIPT',
    header:
      'SCRIPT THAT NOTIFIES A USER, WHEN THE GIVEN ITEM REACHES A CERTAIN PRICE',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347499/really%20compresed%20personal%20website/portfolio/amazon_bpx8gu.jpg',
    details:
      'A simple script that always run on my computer in order to never miss a good deal from the items that ' +
      ' I already want. It notifies me through email whenever the price of my desired items drop enough.',
    repository_link: 'https://github.com/Gsak3l/Python-Price-Script-for-Amazon',
    data_filter: 'automation',
    tags: ['PYTHON', 'REQUESTS', 'BEAUTIFULSOUP', 'SMTPLIB'],
  },
  {
    id: 'ttt',
    category: 'WEB BASED',
    title: 'TIC-TAC-TOE',
    header: 'DEVELOPMENT OF A COMPLEX TIC-TAC-TOE GAME USING JAVASCRIPT',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347502/really%20compresed%20personal%20website/portfolio/tictactoe_dfybjf.png',
    details:
      'I enjoy playing simple old-school games like Rock-Paper-Scissors or Tic-Tac-Toe or UNO, so I decided to create' +
      ' a quite complex TIC-TAC-TOE game, where a user plays against a computer and it is impossible for him to win.',
    repository_link: 'https://github.com/Gsak3l/tic-tac-toe',
    live_demo: 'https://gsak3l.github.io/rock-paper-scissors-game/index.html',
    data_filter: 'web',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
  {
    id: 'frs',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'FACE RECOGNITION SYSTEM',
    header: 'DEVELOPMENT OF A FACE RECOGNITION SYSTEM USING PYTHON',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347501/really%20compresed%20personal%20website/portfolio/facerecognition_zpcak7.png',
    details:
      'Development of a few smaller scaled projects that focused on face regognition using the python library face_recognition.' +
      ' This application manages to also differentiate look-alikes from people.',
    repository_link: 'https://github.com/Gsak3l/python-image-face-regognition',
    data_filter: 'ai',
    tags: ['PYTHON', 'PIPENV', 'FACE_RECOGNITION'],
  },
  {
    id: 'sb',
    category: 'AUTOMATION',
    title: 'STOCKS BUYER',
    header: 'DEVELOPED A BOT THAT BUYS STOCKS',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347502/really%20compresed%20personal%20website/portfolio/tradingbot_n0ph6m.png',
    details:
      'Development of bot that takes all the important data from FINANCE.YAHOO.COM and then buys' +
      ' some stocks on ETORO.COM according to some criteria.',
    repository_link: 'https://github.com/Gsak3l/etoro-trading-bot',
    data_filter: 'automation',
    tags: ['PYTHON', 'SELENIUM', 'MULTIPROCESSING'],
  },
  {
    id: 'tm',
    category: 'WEB BASED',
    title: 'TASK MANAGER',
    header: 'DEVELOPED A TASK MANAGER BASED ON THE MEAN STACK',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347501/really%20compresed%20personal%20website/portfolio/meantask_aluyu7.jpg',
    details:
      'Developed a task manager app, using ANGULAR 9, NODEJS, EXPRESS JS and MONGODB. This app' +
      ' has all the basic features, like adding new todo things, removing them and marking them as done.',
    repository_link: 'https://github.com/Gsak3l/MEAN-task-manager',
    data_filter: 'web',
    tags: [
      'ANGULAR 9',
      'MONGODB',
      'EXPRESSJS',
      'NODEJS',
      'TYPESCRIPT',
      'JAVASCRIPT',
      'SCSS',
      'HTML',
    ],
  },
  {
    id: 'etw',
    category: 'WEB BASED',
    title: 'ENGLISH TEACHER WEBSITE',
    header: 'DEVELOPED AND DESIGNED A WEBSITE FOR AN ENGLISH TEACHER',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347500/really%20compresed%20personal%20website/portfolio/englishteacher_wxstv4.jpg',
    details:
      'Developed a website for an english teacher using simple HTML, CSS, JAVASCRIPT',
    repository_link: 'https://github.com/Gsak3l/English-Professor-Website',
    live_demo: 'https://thodoros-english-teacher.netlify.app/',
    data_filter: 'web',
    tags: ['HTML', 'CSS', 'JAVASCIPT'],
  },
  {
    id: 'mit',
    category: 'WEB BASED',
    title: 'MUSICAL INSTRUMENT TECHNICIAN',
    header:
      'DEVELOPED AND DESIGNED A WEBSITE FOR A MUSICAL INSTRUMENT TECHNICIAN',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347499/really%20compresed%20personal%20website/portfolio/artandmusic_yt9isb.jpg',
    details:
      'Developed a website for a musical instrument technician using simple HTML, CSS, JAVASCRIPT',
    repository_link: 'https://github.com/Gsak3l/art-and-music',
    live_demo: 'https://artandmusic.gr/',
    data_filter: 'web',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
  {
    id: 'mw',
    category: 'WEB BASED',
    title: 'MERCHAND WEBSITE',
    header: 'DEVELOPED AND DESIGNED A WEBSITE FOR A MERCHAND',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347501/really%20compresed%20personal%20website/portfolio/merchand_yamedt.jpg',
    details:
      'Developed a website for a merchand using Angular and Firebase. This project is still under construction and will ' +
      ' most likely never finish but it looks decent.',
    repository_link: 'https://github.com/Gsak3l/merchand-website',
    data_filter: 'web',
    tags: ['ANGULAR 10', 'JAVASCRIPT', 'TYPESCRIPT', 'SCSS', 'CSS', 'HTML'],
  },
  {
    id: 'nnit',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'NEURAL NETWORK IRIS TRAINING',
    header: 'NEURAL NETWORK IRIS TRAINING IN PYTHON',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347501/really%20compresed%20personal%20website/portfolio/iris_kx8qvn.png',
    details:
      'Development of a neural network that trains from given data. Build in PYTHON using PANDAS, NUMPY, AND PYPLOT',
    repository_link: 'https://github.com/Gsak3l/Iris-Flower-Training-Algorithm',
    data_filter: 'ai',
    tags: ['PYTHON', 'PANDAS', 'NUMPY', 'MATPLOTLIB.PYPLOT'],
  },
  {
    id: 'clf',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'CAR LANES FINDER',
    header: 'ALGORITHM THAT FINDS CAR LANES',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347501/really%20compresed%20personal%20website/portfolio/lanefinder_ra1uow.jpg',
    details:
      'Algorithm that detects the car lanes of a given video, and marks them with a line to make them more visible. This' +
      ' algorithm is built using NUMPY and OPENCV in PYTHON.',
    repository_link: 'https://github.com/Gsak3l/Car-Lanes-Finder',
    data_filter: 'ai',
    tags: ['PYTHON', 'NUMPY', 'OPENCV', 'MATPLOTLIB.PYPLOT'],
  },
  {
    id: 'aea',
    category: 'ANDROID APPLICATION',
    title: 'ANDROID ECOMMERCE APPLICATION',
    header: 'ANDROID ECOMMERCE APPLICATION THAT SELLS CLOTHES',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347500/really%20compresed%20personal%20website/portfolio/ecommerce_fzzuuc.png',
    details:
      'Developed an android ecommerce application using JAVA and ROOM API. This app is not a real e-shop' +
      ' but has some of its functionality.',
    repository_link: 'https://github.com/Gsak3l/ECommerce-Java-Room',
    data_filter: 'others',
    tags: ['ANDROID STUDIO', 'JAVA', 'ROOM API', 'MATERIAL DESIGN'],
  },
  {
    id: 'wfarc',
    category: 'WEB BASED',
    title: 'WEBSITE FOR A RUNNING CLUB',
    header: 'WEB SITE FOR RUNNING CLUB USING WORDPRESS',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347502/really%20compresed%20personal%20website/portfolio/sdyth_j84h3c.jpg',
    details:
      'I collaborated with George Stinis to make develop a website for one of the most popular Running' +
      ' Clubs in Greece. We had a deadline of 7 days due to some restrictions with their older website moderator,' +
      ' so it was a difficult task.',
    data_filter: 'web',
    live_demo: 'https://sdyth.gr',
    tags: ['WORDPRESS', 'PHP'],
  },
  {
    id: 'thp',
    category: 'WEB BASED',
    title: 'TRADE HOUSE PROPERTIES',
    header: 'DEVELOPED AND DESIGNED A WEB APP FOR TRADING HOUSES ',
    image:
      'https://res.cloudinary.com/gsak3ll/image/upload/f_auto,q_auto/v1612347499/really%20compresed%20personal%20website/portfolio/airbnb_ecchnb.jpg',
    details:
      'Development of the Front-end of a web based application similar to Airbnb where people from all arround the world' +
      ' could rent their own house, or offer it as an exchange for a short amound of time.',
    data_filter: 'web',
    repository_link: 'https://github.com/Gsak3l/airbnb-clone-app',
    live_demo: 'https://gsak3l.github.io/airbnb-clone-app/index.html',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
];
