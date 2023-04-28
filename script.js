const mainMenu = document.querySelector('.menuList');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.humburger');
const menuItems = document.querySelectorAll('.menuList li a');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});

const Projects = [

  {
    id: 'Project1',
    Image: './images/speaker_01.png',
    Name: 'Alex Waweru',
    Proffesion: 'Music Professor of Entrepreneurial Legal Studies at Harvard Law School',
    Description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 'Project2',
    Image: './images/speaker_4.png',
    Name: 'SohYeong Noh',
    Proffesion: 'Director of Art Centre Nabi and a board member of CC Korea</span ',
    Description: ' As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',

  },
  {
    id: 'Project3',
    Image: './images/speaker_02.png',
    Name: 'Brika Oseli',
    Proffesion: 'Music Professor of Entrepreneurial Legal Studies at Harvard Law School',
    Description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 'Project4',
    Image: './images/speaker_001.png',
    Name: 'Naom Muma',
    Proffesion: 'Director of Art Centre Nabi and a board member of CC Korea</span ',
    Description: ' As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',

  },

  {
    id: 'Project5',
    Image: './images/speaker_06.png',
    Name: 'Grigo Pips',
    Proffesion: 'Music Professor of Entrepreneurial Legal Studies at Harvard Law School',
    Description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 'Project6',
    Image: './images/speaker_05.png',
    Name: 'Nor Heshi',
    Proffesion: 'Director of Art Centre Nabi and a board member of CC Korea</span ',
    Description: ' As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',

  },

];

//    first speaker
const cardSection1 = document.getElementById('melody-speakers');

for (let i = 0; i <= 0; i += 1) {
  const card = ` <div class="contributors-main">
  <div class="contributors-img" id="speaker-1">
    <img src="${Projects[i].Image}" alt="cont-image" />
  </div>
  <div class="contributors-content">
    <h3>${Projects[i].Name}</h3>
    <span
      >${Projects[i].Proffesion}</span
    >
    <div class="contributor-border"></div>
    <p>
      ${Projects[i].Description}
    </p>
  </div>`;

  cardSection1.innerHTML += card;
}

// second speaker

const cardSection2 = document.getElementById('melody-speakers');

for (let i = 1; i <= 1; i += 1) {
  const card = ` <div class="contributors-main" id = "speaker-2">
  <div class="contributors-img">
    <img src="${Projects[i].Image}" alt="cont-image" />
  </div>
  <div class="contributors-content">
    <h3>${Projects[i].Name}</h3>
    <span
      >${Projects[i].Proffesion}</span
    >
    <div class="contributor-border"></div>
    <p>
      ${Projects[i].Description}
    </p>
  </div>`;

  cardSection2.innerHTML += card;
}

// third speaker

const cardSection3 = document.getElementById('melody-speakers');

for (let i = 2; i <= 2; i += 1) {
  const card = ` <div class="contributors-main" id = "speaker-3">
  <div class="contributors-img">
    <img src="${Projects[i].Image}" alt="cont-image" />
  </div>
  <div class="contributors-content">
    <h3>${Projects[i].Name}</h3>
    <span
      >${Projects[i].Proffesion}</span
    >
    <div class="contributor-border"></div>
    <p>
      ${Projects[i].Description}
    </p>
  </div>`;

  cardSection3.innerHTML += card;
}

// fourth speaker

const cardSection4 = document.getElementById('melody-speakers');

for (let i = 3; i <= 3; i += 1) {
  const card = ` <div class="contributors-main" id = "speaker-4">
  <div class="contributors-img">
    <img src="${Projects[i].Image}" alt="cont-image" />
  </div>
  <div class="contributors-content">
    <h3>${Projects[i].Name}</h3>
    <span
      >${Projects[i].Proffesion}</span
    >
    <div class="contributor-border"></div>
    <p>
      ${Projects[i].Description}
    </p>
  </div>`;

  cardSection4.innerHTML += card;
}

// fifth speaker

const cardSection5 = document.getElementById('melody-speakers');

for (let i = 4; i <= 4; i += 1) {
  const card = ` <div class="contributors-main" id = "speaker-5">
  <div class="contributors-img">
    <img src="${Projects[i].Image}" alt="cont-image" />
  </div>
  <div class="contributors-content">
    <h3>${Projects[i].Name}</h3>
    <span
      >${Projects[i].Proffesion}</span
    >
    <div class="contributor-border"></div>
    <p>
      ${Projects[i].Description}
    </p>
  </div>`;

  cardSection5.innerHTML += card;
}

// sixth speaker

const cardSection6 = document.getElementById('melody-speakers');

for (let i = 5; i <= 5; i += 1) {
  const card = ` <div class="contributors-main" id = "speaker-6">
  <div class="contributors-img">
    <img src="${Projects[i].Image}" alt="cont-image" />
  </div>
  <div class="contributors-content">
    <h3>${Projects[i].Name}</h3>
    <span
      >${Projects[i].Proffesion}</span
    >
    <div class="contributor-border"></div>
    <p>
      ${Projects[i].Description}
    </p>
  </div>`;

  cardSection6.innerHTML += card;
}

const moreBtn = () => {
  document.getElementById('speaker-3').style.display = 'flex';
  document.getElementById('speaker-4').style.display = 'flex';
  document.getElementById('speaker-5').style.display = 'flex';
  document.getElementById('speaker-6').style.display = 'flex';
};

document.querySelector('.contributors-btn1').addEventListener('click', moreBtn);
