const cardSection = document.getElementById('melody-speakers');

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
    id2: 'Project2',
    Image: './images/passport1.jpg',
    Image2: './images/speaker_4.png',
    Name: 'Alex Waweru',
    Name2: 'SohYeong Noh',
    Proffesion: 'Music Professor of Entrepreneurial Legal Studies at Harvard Law School',
    Proffesion2: 'Director of Art Centre Nabi and a board member of CC Korea</span ',
    Description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    Description2: ' As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 'Project3',
    id2: 'Project4',
    Image: './images/speaker_02.png',
    Image2: './images/speaker_001.png',
    Name: 'Brika Oseli',
    Name2: 'Naom Muma',
    Proffesion: 'Music Professor of Entrepreneurial Legal Studies at Harvard Law School',
    Proffesion2: 'Director of Art Centre Nabi and a board member of CC Korea</span ',
    Description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    Description2: ' As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 'Project5',
    id2: 'Project6',
    Image: './images/speaker_01.png',
    Image2: './images/speaker_05.png',
    Name: 'Grigo Pips',
    Name2: 'Nor Heshi',
    Proffesion: 'Music Professor of Entrepreneurial Legal Studies at Harvard Law School',
    Proffesion2: 'Director of Art Centre Nabi and a board member of CC Korea</span ',
    Description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    Description2: ' As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

];

Projects.forEach((project) => {
  const cardDiv = document.createElement('div');
  cardDiv.innerHTML = `<div class="contr-align">
  <div class="contributors-main">
    <div class="contributors-img">
      <img src=${project.Image} alt="cont-image" />
    </div>
    <div class="contributors-content">
      <h3>${project.Name}</h3>
      <span
        >${project.Proffesion}</span
      >
      <div class="contributor-border"></div>
      <p>
        ${project.Description}
      </p>
    </div>
  </div>
  <div class="contributors-main">
    <div class="contributors-img">
      <img src=${project.Image2} alt="cont-image" />
    </div>
    <div class="contributors-content">
      <h3>${project.Name2}</h3>
      <span
        >${project.Proffesion2}</span
      >
      <div class="contributor-border"></div>
      <p>
      ${project.Description2}
      </p>
    </div>
  </div>
</div>`;

  cardSection.append(cardDiv);
});