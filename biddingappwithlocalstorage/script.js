const userOneBids = JSON.parse(localStorage.getItem("userOneBids")) || [];
const userTwoBids = JSON.parse(localStorage.getItem("userTwoBids")) || [];
function placeBidOne() {
    const bidOne = document.getElementById("bid-one");
    const newBid = bidOne.value.trim();
    if (newBid === "") {
        alert("Cannot place an empty bid!");
    } else {
        userOneBids.push(newBid);
        saveToStorage();
        postToApp();
        bidOne.value = "";
    }
}
function placeBidTwo() {
    const bidTwo = document.getElementById("bid-two");
    const newBid = bidTwo.value.trim();
    if (newBid === "") {
        alert("Cannot place an empty bid!");
    } else {
        userTwoBids.push(newBid);
        saveToStorage();
        postToApp();
        bidTwo.value = "";
    }
}
function saveToStorage() {
    localStorage.setItem("userOneBids", JSON.stringify(userOneBids));
    localStorage.setItem("userTwoBids", JSON.stringify(userTwoBids));
}
function postToApp() {
    const userOne = document.getElementById("user-one-bids");
    const userTwo = document.getElementById("user-two-bids");
    userOne.innerHTML = userOneBids.map(bid => `<p>${bid}</p>`).join("");
    userTwo.innerHTML = userTwoBids.map(bid => `<p>${bid}</p>`).join("");
}
document.addEventListener("DOMContentLoaded", postToApp);