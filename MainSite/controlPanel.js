const sovietPanel = document.getElementById("soviet");
const kerenskyPanel = document.getElementById("kerensky");
const roguelikePanel = document.getElementById("roguelike");

sovietPanel.onclick = () => {
    window.location.href = "../SovietVSLisards/index.html";
};

kerenskyPanel.onclick = () => {
    window.location.href = "../KerenskyEscape/index.html";
};

roguelikePanel.onclick = () => {
    window.location.href = "../Roguelike game/index.html";
};