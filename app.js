let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelectorAll(".html");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainor = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
const restwgame = () => {
    turn0 = true;
    enable();
    msgcontainor.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const disable = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enable = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgcontainor.classList.remove("hide");
    disable();
}
const checkwinner = () => {
    for (let patternd of winPatterns) {

        let pos1val = boxes[patternd[0]].innerText;
        let pos2val = boxes[patternd[1]].innerText;
        let pos3val = boxes[patternd[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {


                showwinner(pos1val);
            }
        }
    }
};
newgamebtn.addEventListener("click", restwgame);
restbtn.addEventListener("click", restwgame);