var pageId = localStorage.getItem("pageNumber")
console.log('i got the pageId')
console.log(pageId)
  //three JS files that need to be loaded one after the other
  var libs = [
    'info/'+ pageId + '/info.json',
    'js/loadData.js',
  ];

  var injectLibFromStack = function(){
      if(libs.length > 0){

        //grab the next item on the stack
        var nextLib = libs.shift();
        var headTag = document.getElementsByTagName('head')[0];

        //create a script tag with this library
        var scriptTag = document.createElement('script');
        scriptTag.src = nextLib;

        //when successful, inject the next script
        scriptTag.onload = function(e){
          injectLibFromStack();
        };

        //append the script tag to the <head></head>
        headTag.appendChild(scriptTag);
      }
      else return;
  }

  //start script injection
  injectLibFromStack();
