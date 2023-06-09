var allowed="abcdefghijklmnopqrstuvwxyz@!$&*?";

function random(){
    var n=Math.floor(Math.random()*32);
    return n;
}

function generate(){
    var out="";
    for(var i=0;i<8;i++){
        var randNum=random();
        out+=allowed.charAt(randNum);
    }
    document.getElementById("pwd").value=out;
}

function toCopy(){
    var copiedText=document.getElementById("pwd");

    //To select input text
    copiedText.select();
    copiedText.setSelectionRange(0,99999);

    //To copy it to clipboard
    navigator.clipboard.writeText(copiedText.value);
}