$('Document').ready(function () {



    var info1 = document.getElementById('ltd');
    var info2 = document.getElementById('ltv');
    var info3 = document.getElementById('pcng');
    var info4 = document.getElementById('hrvol');
    var info5 = document.getElementById('hrhigh');
    var info6 = document.getElementById('hrlow');
    var info7 = document.getElementById('ath');
    var info8 = document.getElementById('atl');

    var IdArray = [info1, info2, info3, info4, info5, info6, info7, info8];
    
    setInterval(rc,1000);

    setInterval(function () {
        for (var i = 0; i < IdArray.length; i++) {
            var rnd = (Math.round(Math.random() * 6) + 1);
            IdArray[i].textContent = rnd;
            elem = IdArray[i];
            if(rnd>5){
                addClass(IdArray[i],'green');
            }
            else if(rnd<4){
               addClass(IdArray[i],'red'); 
            }
        }
    }, 1000);


    function addClass(element, className) {
        var currentClassName = element.getAttribute("class");
        if (typeof currentClassName !== "undefined" && currentClassName) {
            element.setAttribute("class", currentClassName + " " + className);
        } else {
            element.setAttribute("class", className);
        }
    }

    function removeClass(element, className) {
        var currentClassName = element.getAttribute("class");
        if (typeof currentClassName !== "undefined" && currentClassName) {

            var class2RemoveIndex = currentClassName.indexOf(className);
            if (class2RemoveIndex != -1) {
                var class2Remove = currentClassName.substr(class2RemoveIndex, className.length);
                var updatedClassName = currentClassName.replace(class2Remove, "").trim();
                element.setAttribute("class", updatedClassName);
            }
        } else {
            element.removeAttribute("class");
        }
    }
    
    function rc(){
        removeClass(info1,'red');
        removeClass(info2,'red');
        removeClass(info3,'red');
        removeClass(info4,'red');
        removeClass(info5,'red');
        removeClass(info6,'red');
        removeClass(info7,'red');
        removeClass(info8,'red');
        removeClass(info1,'green');
        removeClass(info2,'green');
        removeClass(info3,'green');
        removeClass(info4,'green');
        removeClass(info5,'green');
        removeClass(info6,'green');
        removeClass(info7,'green');
        removeClass(info8,'green');
        
    }

});
