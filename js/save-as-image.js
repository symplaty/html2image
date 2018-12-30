(function(){
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js';
  document.body.appendChild(script);})();
  script.src = 'https://github.com/hongru/canvas2image/raw/master/canvas2image.js';
  document.body.appendChild(script);})();
  var div = document.getElementsByTagName('img')[0];
  var options = {
    useCORS: true,
    scale: 2,
    logging: true
  };
  html2canvas(div, options).then(function(canvas){
    document.body.appendChild(canvas);
    Canvas2Image.saveAsPNG(canvas, canvas.width, canvas.height);
  });
})();
