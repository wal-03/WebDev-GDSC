//  Notice element
const notice = document.querySelector(".chat-notice");
const noticeCloseButton = document.querySelector(".chat-notice-header");
//  element
const chatbox = document.querySelector(".chat-box");
const chatButton = document.querySelector(".chat-button");
//  event listener untuk notice
noticeCloseButton.addEventListener("click", function () {
    notice.classList.add("hidden");
});
//  event listener untuk chatbox
chatButton.addEventListener("click", function () {
    chatbox.classList.toggle("hidden");
});