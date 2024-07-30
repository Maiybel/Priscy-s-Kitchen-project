// hamburger control
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("check").checked = false;
    });
  });
});

// about me section
function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

// Dishes section
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;
  const itemsPerView = getItemsPerView();

  if (index >= totalSlides - itemsPerView + 1) {
    currentIndex = totalSlides - itemsPerView;
  } else if (index < 0) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * (100 / itemsPerView);
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;

  // to show or hide side arrows
  document.querySelector(".prev").style.display =
    currentIndex === 0 ? "none" : "block";
  document.querySelector(".next").style.display =
    currentIndex >= totalSlides - itemsPerView ? "none" : "block";
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function getItemsPerView() {
  const width = window.innerWidth;
  if (width >= 1200) {
    return 2;
  } else if (width >= 992) {
    return 2;
  } else {
    return 1;
  }
}

window.addEventListener("resize", () => {
  showSlide(currentIndex);
});

showSlide(currentIndex);

// contact us section
// function submitContactForm() {
//   console.log("Form submission begun");
//   const form = document.getElementById("contact-form");
//   const formData = new FormData(form);
//   console.log("Form Data", formData);
//   sendFormData("https://formspree.io/f/manwezad", formData);
//   console.log("Form Data sent successfully");
// }

// function sendFormData(url, formData) {
//   fetch(url, {
//     method: "POST",
//     body: formData,
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log("Message sent successfully");
//       } else {
//         console.log("Form failed to submit");
//       }
//     })
//     .catch((error) => {
//       console.log(`Form failed to submit due to error: ${error}`);
//     });
// }
document;
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent!");
    document.getElementById("contact-form").reset();
  });
