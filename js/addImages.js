var pageId = localStorage.getItem("pageNumber")
var imageLocation = ['info/'+ pageId + '/images/']
$("#titleImages").prepend('<li><img src="'+ imageLocation + 'img12.jpg" /></li>')
for (i = 0; i < 20; i++) {
  $("#titleImages").prepend('<li><img src="'+ imageLocation + 'img'+ (i+1)+'.jpg" /></li>')
}
