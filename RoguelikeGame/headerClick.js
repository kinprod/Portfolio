const mainUrl = document.getElementById("mainUrl");
const aboutMe = document.getElementById("AboutMe");
const github = document.getElementById("GitHub");

mainUrl.onclick = () => {
    window.location.href = "/MainSite/index.html";
};

aboutMe.onclick = () => {
    window.location.href = "../index.html";
};

github.onclick = () => {
    window.location.href = "https://github.com/kinprod";
};