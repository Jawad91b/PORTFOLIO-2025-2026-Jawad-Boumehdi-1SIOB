function calculer() {
    var un = document.getElementById("t1").value;
    var b = document.getElementById("t4").value;
    var c = Number(un) * Number(b);
    document.getElementById("t7").value = c;

    var d = document.getElementById("t2").value;
    var e = document.getElementById("t5").value;
    var f = Number(d) * Number(e);
    document.getElementById("t8").value = f;

    var g = document.getElementById("t3").value;
    var h = document.getElementById("t6").value;
    var je = Number(g) * Number(h);
    document.getElementById("t9").value = je;

    var a = document.getElementById("t7").value;
    var b = document.getElementById("t8").value;
    var c = document.getElementById("t9").value;
    var d = Number(a) + Number(b) + Number(c);
    document.getElementById("t10").value = d;
}
function reinit()
{
    t1.value = "";
    t2.value = "";
    t3.value = "";
    t4.value = "";
    t5.value = "";
    t6.value = "";
    t7.value = "";
    t8.value = "";
    t9.value = "";
    t10.value = "";
}