
function calculer() {
    calculerSet('');
    calculerSet('1');
    calculerSet('2');
    calculerSet('3');
    calculerSet('4');
    calculerSet('5');
    calculerSet('6');
    calculerSet('7');
}

function calculerSet(set) {
    let dsId = "ds" + set;
    let exId = "ex" + set;
    let resId = "res" + set;

    let n1 = parseFloat(document.getElementById(dsId).value);
    let n2 = parseFloat(document.getElementById(exId).value);
    let r = (n1 * 0.4) + (n2 * 0.6);
    document.getElementById(resId).value = parseFloat(r.toFixed(2));
}

function calculer1() {
    calculerSet1("math", '');
    calculerSet1("web", '4');
    calculerSet1("py", '7');
}

function calculerSet1(tp, set) {
    let tp_ID = "TP_" + tp;
    let resId = "res" + set;
    let moy_ID = "moy_" + tp;

    let n1 = parseFloat(document.getElementById(tp_ID).value);
    let n2 = parseFloat(document.getElementById(resId).value);
    let r = (n1 + n2) / 2;
    document.getElementById(moy_ID).value = parseFloat(r.toFixed(2));
}

function calcule_lang() {
    let n1 = parseFloat(document.getElementById("res5").value);
    let n2 = parseFloat(document.getElementById("res6").value);
    let n3 = parseFloat(document.getElementById("busi").value);
    let n4 = parseFloat(document.getElementById("CCN").value);
    let r = ((n1 + n3 + n4)*0.5 + n2)/2.5;
    document.getElementById("moy_lang").value=parseFloat(r.toFixed(2))
}
function calcule_algo() {
    let n1 = parseFloat(document.getElementById("res1").value);
    let n2 = parseFloat(document.getElementById("TP_prog").value);
    let r = (n1*2.5+ n2)/3.5;
    document.getElementById("moy_prog").value=parseFloat(r.toFixed(2))
}
function calcule_sys() {
    let n1 = parseFloat(document.getElementById("res2").value);
    let n2 = parseFloat(document.getElementById("res3").value);
    let n3 = parseFloat(document.getElementById("TP_sys").value);
    let r = (n1+n2+n3)/3;
    document.getElementById("moy_sys").value=parseFloat(r.toFixed(2))
}
function touts(){
    let n1 = parseFloat(document.getElementById("moy_math").value);
    let n2 = parseFloat(document.getElementById("moy_prog").value);
    let n3 = parseFloat(document.getElementById("moy_sys").value);
    let n4 = parseFloat(document.getElementById("moy_lang").value);
    let n5 = parseFloat(document.getElementById("moy_py").value);
    let n6 = parseFloat(document.getElementById("moy_web").value);
    let r = (n1*2+n2*3.5+n3*3+n4*2.5+n5*2+n6*2)/15;
    document.getElementById("tout").value=parseFloat(r.toFixed(2))
}