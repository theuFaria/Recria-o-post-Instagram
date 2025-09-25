const numeroLikesInpt = Array.from(document.querySelectorAll(".likes"));
let likes = 39450;
numeroLikesInpt.map((e) => (e.textContent = likes.toLocaleString("pt-br")));

const iconLikeEmpty = Array.from(document.querySelectorAll(".btnLikeEmpty"));
const iconLikeFilled = Array.from(document.querySelectorAll(".btnLikeFilled"));
const animationHeart = document.querySelector(".animationHeart");

iconLikeEmpty.map((e) => e.addEventListener("click", () => {
  changeIcon(iconLikeEmpty, iconLikeFilled);
  appearAnimationHeart();
  likes++;
  numeroLikesInpt.map((e) => (e.textContent = likes.toLocaleString("pt-br")))
}));

iconLikeFilled.map((e) => e.addEventListener("click", () => {
  changeIcon(iconLikeEmpty, iconLikeFilled);
  likes--;
  numeroLikesInpt.map((e) => (e.textContent = likes.toLocaleString("pt-br")))
}));

const imgPost = document.querySelector("#fotoPost");

imgPost.addEventListener("dblclick", () => {
  changeIcon(iconLikeEmpty, iconLikeFilled);
  if (iconLikeFilled.filter((e) => e.classList.contains("hide")).length > 0) {
    likes--;
    numeroLikesInpt.map((e) => (e.textContent = likes.toLocaleString("pt-br")))
  } else {
    appearAnimationHeart();
    likes++;
    numeroLikesInpt.map((e) => (e.textContent = likes.toLocaleString("pt-br")))
  }
});

const iconSaveEmpty = Array.from(document.querySelectorAll(".btnSaveEmpty"));
const iconSaveFilled = Array.from(document.querySelectorAll(".btnSaveFilled"));
const alerta = document.querySelector(".alertPost");

iconSaveEmpty.map((e) => e.addEventListener("click", () => {
  alertaPost("O post foi salvo");
  sumirAlertPost();
  changeIcon(iconSaveEmpty, iconSaveFilled);
}));

iconSaveFilled.map((e) => e.addEventListener("click", () => {
  alertaPost("O post não está mais salvo");
  sumirAlertPost();
  changeIcon(iconSaveEmpty, iconSaveFilled);
}));

const imgFotoPerfilHover = document.querySelector("#fotoPerfilHover");
const imgFotoPerfil = document.querySelector(
  ".containerFotoPerfil img:first-child"
);

imgFotoPerfil.addEventListener("mouseenter", () => {
  imgFotoPerfilHover.classList.remove("hide");
});
imgFotoPerfilHover.addEventListener("mouseout", () => {
  imgFotoPerfilHover.classList.add("hide");
});

const btnCommentIcon = document.querySelector(".btnComment");
const body = document.querySelector("body");
const inptComment = document.querySelector("#inptComment");
const btnCommentSend = document.querySelector(".btnPostComment");
const commentsSection = document.querySelector(".containerWindowComment");
const exitOverlay = document.querySelector("#btnExitOverlay");

btnCommentIcon.addEventListener("click", () => {
  commentsSection.classList.remove("hide");
  body.classList.add("overlay", "overflowHide");
  exitOverlay.classList.remove("hide");
});

btnCommentSend.addEventListener("click", () => {
  addComment();
  btnCommentSend.classList.remove("opacity1", 'pointer');
});

inptComment.addEventListener("keyup", () => {
  verificarComentario();
})

exitOverlay.addEventListener("click", () => {
  exitCommentSection();
})

inptComment.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addComment();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    exitCommentSection();
  }
});

const comments = document.querySelector(".commentsArea");
function addComment() {
  if (inptComment.value.length > 0) {
    let divIcon = document.createElement("div");
    let divComment = document.createElement("div");
    let comment = document.createElement("p");
    divIcon.classList.add("iconUser");
    divIcon.innerHTML = `<i class="fa-solid fa-user"></i>`
    divComment.classList.add("comment");
    comment.innerHTML = `<span class="bold">User </span>${inptComment.value}`;
    divComment.classList.add("animatedComment");
    divComment.append(divIcon);
    divComment.append(comment);
    comments.appendChild(divComment);
    inptComment.value = "";
  }
}
function exitCommentSection() {
  commentsSection.classList.add("hide");
  body.classList.remove("overlay", "overflowHide");
  exitOverlay.classList.add('hide');
}

function alertaPost(txt) {
  alerta.classList.contains("hide");
  const texto = document.querySelector(".alertPost span");
  alerta.classList.add("animationLeftToRight");
  alerta.classList.remove("hide");
  texto.textContent = txt;
}

function changeIcon(icon1, icon2) {
  icon1.map((e) => e.classList.toggle("hide"));
  icon2.map((e) => e.classList.toggle("hide"));
}

const btnCloseAlert = document.querySelector(".closeAlert");
btnCloseAlert.addEventListener("click", () => {
  alerta.classList.add("hide");
});

function sumirAlertPost() {
  setTimeout(() => alerta.classList.add("hide"), 2000);
}
function appearAnimationHeart() {
  animationHeart.classList.remove("hide");
  setTimeout(() => animationHeart.classList.add("hide"), 1500);
}

function verificarComentario() {
  if (inptComment.value.length > 0) {
    btnCommentSend.classList.add("opacity1", "pointer")
  } else if (inptComment.value.length === 0) {
    btnCommentSend.classList.remove("opacity1", "pointer")
  }
}

const btnSettingsInPost = document.querySelector(".settingsInPost");
const settingsWindow = document.querySelector("#settingsWindow");
const btnIntoSettings = Array.from(document.querySelectorAll(".settingsInPost .pointer"));

btnIntoSettings.map((e) => e.addEventListener("click", () => {
  enterSettingsWindow();
}))
btnSettingsInPost.addEventListener("click", () => {
  enterSettingsWindow();
})
const btnExitSettings = document.querySelector("#exitSettings");

btnExitSettings.addEventListener('click', () => {
  settingsWindow.classList.add("hide");
  body.classList.remove("overlay", "overflowHide");
})

function enterSettingsWindow() {
  settingsWindow.classList.remove("hide")
  body.classList.add("overlay", 'overflowHide')
}
