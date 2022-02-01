AFRAME.registerComponent('dark-side-of-the-moon', {
    init: function () {
        // Solution for Handling Events. 
        var skybox = document.getElementById('sky');
        var innertriangle = document.getElementById('innerTriangle');
        var outerTriangle = document.getElementById('outerTriangle');   

        // var sphereEl = document.getElementById('sphere');

        var lightW = document.getElementById('whiteLight');
        var lightR = document.getElementById('redLight');
        var lightO = document.getElementById('orangeLight');
        var lightY = document.getElementById('yellowLight');
        var lightG = document.getElementById('greenLight');
        var lightB = document.getElementById('blueLight');
        var lightP = document.getElementById('purpleLight');
          
        innertriangle.addEventListener('click', function () {
            skybox.setAttribute('material', 'color', 'black');
            innertriangle.setAttribute('material', 'color', 'black');
            outerTriangle.setAttribute('material', 'color', 'white');
            // sphereEl.setAttribute('material', 'color', 'red');

            lightW.setAttribute('animation__pos', 'enabled', true);
            lightW.setAttribute('animation__width', 'enabled', true);
            lightR.setAttribute('animation__pos', 'enabled', true);
            lightR.setAttribute('animation__width', 'enabled', true);
            lightO.setAttribute('animation__pos', 'enabled', true);
            lightO.setAttribute('animation__width', 'enabled', true);
            lightY.setAttribute('animation__pos', 'enabled', true);
            lightY.setAttribute('animation__width', 'enabled', true);
            lightG.setAttribute('animation__pos', 'enabled', true);
            lightG.setAttribute('animation__width', 'enabled', true);
            lightB.setAttribute('animation__pos', 'enabled', true);
            lightB.setAttribute('animation__width', 'enabled', true);
            lightP.setAttribute('animation__pos', 'enabled', true);
            lightP.setAttribute('animation__width', 'enabled', true);
        });
          
    }
})