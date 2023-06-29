import self from "../img/self.png";
import ecoyard from "../img/ecoyard.png";
import todo from "../img/todo.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Nabal",
  lastName: "Rai",
  initials: "NCR", // the example uses first and last.
  position: "a Frontend Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🇳🇵",
      text: "based in the Nepal",
    },
    {
      emoji: "💻",
      text: "Frontend Developer at iTsoch",
    },
    {
      emoji: "📧",
      text: "nabalchamlingrai@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://nabalrai.com.np/resume.pdf",
      icon: "fa fa-file-pdf-o",
      label: "resume",
    },
    {
      link: "https://www.instagram.com/namchhorpa/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/namchhorpa",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/nabal-rai-abb690179/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/NabalRai",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],
  bio: "Hello! I'm Nabal Rai. Passionate and skilled programmer experienced in HTML, CSS, JavaScript, and React.js. Always eager to learn and stay up-to-date with the latest advancements. Ready to contribute to companies that value growth and innovation.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "tailwindcss",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "PostgreSQL"],
  },
  hobbies: [
    {
      label: "Stock Market",
      emoji: "📈📊",
    },
    {
      label: "Video Games",
      emoji: "🎮",
    },
    {
      label: "Music",
      emoji: "🎶",
    },
    {
      label: "Anime",
      emoji: "🎞",
    },
    {
      label: "Cooking",
      emoji: "🍳",
    },
    {
      label: "Traveling",
      emoji: "✈️",
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "EcoYard - EcoYard is the an Ecommerce platform",
      live: "https://ecoyard.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/namchhorpa/Nelify", // this should be a link to the **repository** of the project, where the code is hosted.
      image: ecoyard,
    },
    {
      title: "Todo - A place to sort your plans",
      live: "https://itsoch-todo.vercel.app/",
      source: "https://github.com/namchhorpa/Nelify",
      image: todo,
    },
  ],
};
