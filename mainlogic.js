function calcX() {
    var a = parseFloat(document.getElementById("gpathNep").value);
    var b = parseFloat(document.getElementById("gpaprNep").value);
    var c = parseFloat(document.getElementById("gpathEng").value);
    var d = parseFloat(document.getElementById("gpaprEng").value);
    var e = parseFloat(document.getElementById("gpathSlm").value);
    var f = parseFloat(document.getElementById("gpaprSlm").value);
    var g = parseFloat(document.getElementById("gpathO1").value);
    var h = parseFloat(document.getElementById("gpaprO1").value);
    var i = parseFloat(document.getElementById("gpathO2").value);
    var j = parseFloat(document.getElementById("gpaprO2").value);
    var k = parseFloat(document.getElementById("gpathO3").value);
    var l = parseFloat(document.getElementById("gpaprO3").value);
    
    var ab = (a + b)/2
    var cd = (c + d)/2
    var ef = (e + f)/2
    var gh = (g + h)/2
    var ij = (i + j)/2
    var kl = (k + l)/2
    
    var total = (ab * 3) + (cd * 4) + (ef * 5) + (gh * 5) + (ij * 5) + (kl * 5)
    
    var fGpa = total/27
    
    // var rfGpa = fGpa.toFixed(2);
    
       var rfGpa = fGpa.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    
    
    
    alert("Congratulations! Your GPA is: " + rfGpa);
    
    }
    