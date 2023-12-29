// COMPONENTES HTML

const desktopComponent = `
<div class="profile__container">
<div class="profile__right">
  <div class="profile__picture-container">
    <picture>
      <img class="profile__picture" src="./images/avatar-michelle.jpg" alt="michelle">
    </picture>
  </div>

  <div class="profile__info">
    <p class="info__name">
      michelle appleton
      <br>
      <span class="info__date">
        20 jun 2020
      </span>
    </p>
  </div>
</div>


<div id="btn" class="sn__container">
  <div id="sn" class="sn ">
    Share
    <img src="./images/icon-facebook.svg" alt="">
    <img src="./images/icon-twitter.svg" alt="">
    <img src="./images/icon-pinterest.svg" alt="">
    <div class="desk__triangle">
    </div>
  </div>
  <img class="sh__btn-image" src="./images/icon-share.svg" alt="">
</div>
</div>
`;

const mobileComponent = `
<div class="profile__container">

<div id="social__desktop" class="social__desktop">
  <p class="social__desktop-text">Share</p>
  <img class="social__desktop-item" src="./images/icon-facebook.svg" alt="">
  <img class="social__desktop-item" src="./images/icon-twitter.svg" alt="">
  <img class="social__desktop-item" src="./images/icon-pinterest.svg" alt="">
</div>

<div class="profile__right">
  <div class="profile__picture-container">
    <picture>
      <img class="profile__picture" src="./images/avatar-michelle.jpg" alt="michelle">
    </picture>
  </div>

  <div class="profile__info">
    <p class="info__name">
      michelle appleton
      <br>
      <span class="info__date">
        20 jun 2020
      </span>
    </p>
  </div>
</div>


<div id="btnMobile" class="profile__share-container">
  <picture>
    <img class="profile__share" src="./images/icon-share.svg" alt="">
  </picture>
</div>
</div>
`;

function addComponent() {
  const appRoot = document.getElementById("root");

  if (window.innerWidth < 768) {
    appRoot.innerHTML = mobileComponent;
    // mobile components

    document.getElementById("btnMobile").addEventListener("click", () => {
      document
        .getElementById("social__desktop")
        .classList.toggle("social__desktop--active");
    });

    return;
  }

  appRoot.innerHTML = desktopComponent;

  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("sn").classList.toggle("sn--active");
  });

  // Desk components
}

addEventListener("DOMContentLoaded", (_) => {
  // agregar el component inicial.
  addComponent();

  addEventListener("resize", (event) => {
    addComponent();
  });
});
