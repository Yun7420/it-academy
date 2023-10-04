/* 
    2023. 09. 23(토) 작업 완료
    작성자 : 한상윤

    모든 페이지 (index.html, subpage.html)에 적용
    header.html, footer.html을 불러오는 js 입니다.
*/


/* ========== header,footer 관련 ========== */
function includeHTML(){
  var includeArea = $('[data-include]');
  var self,url;

  $.each(includeArea, function(){
      self = $(this);
      url = self.data('include');
      self.load(url, function(){
          self.removeAttr('data-include');
      });
  });
};

document.addEventListener('DOMContentLoaded',function(){
  includeHTML();
});
