

// truncateCardTitle
window.addEventListener("load",function(){
    truncateCardTitle();
})
// lấy nội dung
function truncateCardTitle() {
    var carList = document.getElementsByClassName("card-title");
    for (var i = 0; i < carList.length; i++) {
        var text = carList[i].innerHTML;
        var newText = truncateString(text, 35);
        // trả lại nội dung mới
        carList[i].innerHTML = newText;
    }
}
// rút gọn nội dung
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    else {
        return str;
    }

}
// ready
// onload
/* sidebar mini */
var toggleButton = document.querySelector('.sidebarMini__button');
var sidebarMini =  document.querySelector('.sidebarMini');
var switchBtn =  document.querySelector('#checkbox');

toggleButton.addEventListener('click', function(){
    sidebarMini.classList.toggle('is-opened');
    
});

switchBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('darkMode');
    
});



