const hamburgerBtn = document.querySelector('.icon-hamburger');
const closeBtn = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const form = document.querySelector('.contact-form');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const passedHeader = window.scrollY > header.offsetHeight;
  nav.classList.toggle('nav--glass', passedHeader);
}, { passive: true });

if (form) {
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('name-error');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const subjectInput = document.getElementById('subject');
  const subjectError = document.getElementById('subject-error');
  const messageInput = document.getElementById('message');
  const messageError = document.getElementById('message-error');

  form.addEventListener('submit', function (event) {
    // 1. Stop the form from submitting and reloading the page automatically
    event.preventDefault();

    let isValid = true;

    // 2. Validate the Name field as an example
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      nameError.style.display = "block";
      nameInput.classList.add('input-error');
      isValid = false;
    } else {
      nameError.style.display = "none";
      nameInput.classList.remove('input-error');
    }

    // 3. Repeat the logic above for your email, subject, and message fields...
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Please enter your email.";
      emailError.style.display = "block";
      emailInput.classList.add('input-error');
      isValid = false;
    } else {
      emailError.style.display = "none";
      emailInput.classList.remove('input-error');
    }

    if (subjectInput.value.trim() === "") {
      subjectError.textContent = "Please enter your subject.";
      subjectError.style.display = "block";
      subjectInput.classList.add('input-error');
      isValid = false;
    } else {
      subjectError.style.display = "none";
      subjectInput.classList.remove('input-error');
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Please enter your message.";
      messageError.style.display = "block";
      messageInput.classList.add('input-error');
      isValid = false;
    } else {
      messageError.style.display = "none";
      messageInput.classList.remove('input-error');
    }

    // 4. If everything passes validation, you can send the data
    if (isValid) {
      alert("Form submitted successfully!");
      form.submit(); // Sends the form data to the server
    }
  });

}

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

const execSessions = {
  '2526': [
    { role: 'Superintendent', name: 'Michael Arebisola', img: './images/excos/25-26/Michael.jpg' },
    { role: 'Assistant Superintendent', name: 'AdeogoOluwa Adedokun', img: './images/excos/25-26/Adeogo.jpg' },
    { role: 'General Secretary', name: 'Pelumi Ajagbe', img: './images/excos/25-26/Pelumi.jpg' },
    { role: 'Public Relations Officer', name: 'Ireoluwa Magbagbeola', img: './images/excos/25-26/Ireoluwa.jpg' },
    { role: 'TTP/Family Cordinator', name: 'Funto Femi-Joseph', img: './images/excos/25-26/Funto.jpg' },
    { role: 'Assistant TTP/Family Cordinator', name: 'Oluwapelumi Akanji', img: './images/excos/25-26/Oluawpelumi.jpg' },
    { role: 'Allocation & Dermacation Strategist', name: 'Marvellous Adepoju', img: './images/excos/25-26/Marvellous.jpg' },
    { role: 'Welfare Coordinator', name: 'Oreoluwa Adeniyi', img: './images/excos/25-26/Oreoluwa.jpg' },
    { role: 'Financial Secretary', name: 'Oluwatomisin Adewale', img: './images/excos/25-26/Oluwatomisin.jpg' },
    { role: 'Prayer Coordinator', name: 'Itunuoluwa Adeyemo', img: './images/excos/25-26/Itunuoluwa.jpg' },

  ],
  '2425': [
    { role: 'Superintendent', name: 'Tega Abiri', img: './images/excos/24-25/tega.jpg' },
    { role: 'Assistant Superintendent', name: 'Excel Dopamu', img: './images/excos/24-25/excel.jpg' },
    { role: 'General Secretary', name: 'Oluwaseyi Awodoyin', img: './images/excos/24-25/oluwaseyi.jpg' },
    { role: 'Public Relations Officer', name: 'Precious Akingbade', img: './images/excos/24-25/precious.jpg' },
    { role: 'Assistant Public Relations Officer', name: 'God\'sfavour Onuokike', img: './images/excos/24-25/God\'sfavour.jpg' },
    { role: 'Family/TTP Cordinator', name: 'Deborah Alonge', img: './images/excos/24-25/deborah.jpg' },
    { role: 'Allocation & Demarcation Coordinator', name: 'Solomon Mobolaji', img: './images/excos/24-25/solomon.jpg' },
    { role: 'Welfare Coordinator', name: 'Sunmisola Shodipo', img: './images/excos/24-25/sunmisola.jpg' },
    { role: 'Financial Secretary', name: 'Wuraola Bakare', img: './images/excos/24-25/wuraola.jpg' },
    { role: 'Prayer Coordinator', name: 'Adeoluwa Eniayewun', img: './images/excos/24-25/adeoluwa.jpg' },
  ]
};

let currentSession = [];
let currentIndex = 0;

function openExecSlideshow(sessionKey) {
  currentSession = execSessions[sessionKey];
  currentIndex = 0;
  renderExecSlides();
  document.getElementById('exec-slideshow').classList.add('is-open');
}

function renderExecSlides() {
  const person1 = currentSession[currentIndex];
  const person2 = currentSession[currentIndex + 1];

  document.getElementById('exec-img-1').src = person1.img;
  document.getElementById('exec-role-1').textContent = person1.role;
  document.getElementById('exec-name-1').textContent = person1.name;

  const slide2 = document.getElementById('exec-slide-2');
  if (person2) {
    document.getElementById('exec-img-2').src = person2.img;
    document.getElementById('exec-role-2').textContent = person2.role;
    document.getElementById('exec-name-2').textContent = person2.name;
    slide2.style.display = 'block';
  } else {
    slide2.style.display = 'none'; // odd number of execs, last slide is solo
  }

  const nextBtn = document.querySelector('.exec-slideshow-next');
  nextBtn.style.display = (currentIndex + 2 >= currentSession.length) ? 'none' : 'flex';

  const prevBtn = document.querySelector('.exec-slideshow-prev');
  prevBtn.style.display = (currentIndex === 0) ? 'none' : 'flex';
}

document.querySelector('.exec-slideshow-next').addEventListener('click', () => {
  currentIndex += 2;
  renderExecSlides();
});

document.querySelector('.exec-slideshow-prev').addEventListener('click', () => {
  currentIndex -= 2;
  renderExecSlides();
});

document.querySelector('.exec-slideshow-close').addEventListener('click', () => {
  document.getElementById('exec-slideshow').classList.remove('is-open');
});

