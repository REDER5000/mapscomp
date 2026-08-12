const track = document.getElementById("strack");
const leftBtn = document.getElementById("sleft");
const rightBtn = document.getElementById("sright");

leftBtn.addEventListener("click", () => {
    track.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
    track.scrollBy({ left: 200, behavior: "smooth" });
});