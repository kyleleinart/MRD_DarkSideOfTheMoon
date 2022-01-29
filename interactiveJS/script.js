AFRAME.registerComponent('school-playground', {
        init: function () {
          // Solution for Handling Events.
          var sceneEl = document.querySelector('a-scene'); 
          var boxEl = sceneEl.querySelector('a-box')
          
          boxEl.addEventListener('click', function () {
            boxEl.setAttribute('material','color','red');  
          });
          
        }
  })