const mainUrl = document.getElementById("mainUrl");
const aboutMe = document.getElementById("AboutMe");
const github = document.getElementById("GitHub");

mainUrl.onclick = () => {
    window.location.href = "../Main site/index.html";
};

aboutMe.onclick = () => {
    window.location.href = "../About me/index.html";
};

github.onclick = () => {
    window.location.href = "https://github.com/kinprod";
};