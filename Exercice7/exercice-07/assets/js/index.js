// let intElemScrollHeight = document.getElementById(zoomScroll).scrollHeight;


// var scroll = function () {
//     function zoomScroll(zoom) {

//     }
// }


var f = function() {

    function eventHandler(event) {
        var width = parseInt(window.getComputedStyle(this).width);
        var height = parseInt(window.getComputedStyle(this).height);
        var zoom = 40;

        if (event.wheelDelta > 0) {
            this.style.width = Math.min(1500, width + zoom) + "px";
            this.style.height = Math.min(1500, height + zoom) + "px";
        } else {
            this.style.width = Math.max(200, width - zoom) + "px";
            this.style.height = Math.max(200, height - zoom) + "px";

        }
        event.preventDefault();
    }

    var textElement = document.getElementById('zoomScroll')[0];
    textElement.addEventListener('mousewheel', eventHandler, false);


};

window.addEventListener('load', f, false);