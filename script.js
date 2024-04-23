const navbarnav = document.querySelector(".navbar-nav");

document.querySelector("#humberger").onclick = (e) => {
  navbarnav.classList.toggle("active");
  e.preventDefault();
};

const berger = document.querySelector("#humberger");

document.addEventListener("click", function (e) {
  if (!berger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
    e.preventDefault();
  }
});

function change(ganti) {
  document.querySelector(".jumbo").src = ganti;
}

// search area
const searcharea = document.querySelector(".search-area"),
  searchclose = document.querySelector(".search-close"),
  searchinput = document.querySelector(".search-input");

document.querySelector("#search").onclick = () => {
  searcharea.classList.add("search-show");
  searchinput.focus();
};

searchclose.addEventListener("click", () => {
  searcharea.classList.remove("search-show");
});

searchinput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searcharea.classList.remove("search-show");
  }
});

//modal show

const btnmodaldetail = document.querySelectorAll(".modal-detail-product"),
  modaldetail = document.querySelector(".modal-detail"),
  modalclose = document.querySelector(".modal-close");

btnmodaldetail.forEach((btn) => {
  btn.onclick = () => {
    modaldetail.style.display = "flex";
  };
});

modalclose.addEventListener("click", () => {
  modaldetail.style.display = "none";
});

//klik di luar modal container
window.onclick = (e) => {
  if (e.target === modaldetail) {
    modaldetail.style.display = "none";
  }
};
