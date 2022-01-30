AFRAME.registerComponent('dark-side-of-the-moon', {
        init: function () {
          // Solution for Handling Events. 
          var skybox = document.getElementById('sky');
          var innertriangle = document.getElementById('innerTriangle');
          var outerTriangle = document.getElementById('outerTriangle');   

          var boxEl = document.getElementById('box')
          
          boxEl.addEventListener('click', function () {
            skybox.setAttribute('material', 'color', 'black');
            innertriangle.setAttribute('material', 'color', 'black');
            outerTriangle.setAttribute('material', 'color', 'white');
            boxEl.setAttribute('material','color','red');  
          });
          
        }
  })