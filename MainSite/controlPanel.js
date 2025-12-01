const sovietPanel = document.getElementById("soviet");
const kerenskyPanel = document.getElementById("kerensky");
const roguelikePanel = document.getElementById("roguelike");

sovietPanel.onclick = () => {
    window.location.href = "../SovietVSLisards/soviet.html";
};

kerenskyPanel.onclick = () => {
    window.location.href = "./KerenskyEscape/kerenskySite.html";
};

roguelikePanel.onclick = () => {
    window.location.href = "../RoguelikeGame/roguelike.html";
};