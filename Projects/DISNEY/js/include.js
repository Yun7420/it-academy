/* 
    2023. 09. 23(토) 작업 완료
    작성자 : 한상윤

    모든 페이지 (index.html, subpage.html)에 적용
    header.html, footer.html을 불러오는 js 입니다.
*/

window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');

    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;

        if (includePath) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
            };
        };

            xhttp.open('GET', includePath, true);
            xhttp.send();
        };
    });
});