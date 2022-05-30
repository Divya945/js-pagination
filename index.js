// Import stylesheets
import './style.css';
const reviews = [
  {
    id: 1,
    name: 'susan',
    job: 'developer',
    img: './images/img3.png',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna',
    job: 'designer',
    img: './images/img4.png',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter',
    job: 'intern',
    img: './images/img5.png',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill',
    job: 'boss',
    img: './images/img3.png',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
var prev = document.querySelector('.prev-btn');
var next = document.querySelector('.next-btn');
var random = document.querySelector('.random-btn');

var authorimage = document.getElementById('author-img');
var authorName = document.getElementById('author-name');
var authorrole = document.getElementById('author-role');
var authorinfo = document.getElementById('author-info');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  authorimage.src = item.img;
  authorName.textContent = item.name;
  authorrole.textContent = item.job;
  authorinfo.textContent = item.text;
});

function showPersonDetails(person) {
  const items = reviews[person];
  authorimage.src = items.img;
  authorName.textContent = items.name;
  authorrole.textContent = items.job;
  authorinfo.textContent = items.text;
}
prev.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPersonDetails(currentItem);
});
next.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPersonDetails(currentItem);
});
random.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPersonDetails(currentItem);
});
