var allowed="@!$&*?";

function random(){
    var n=Math.floor(Math.random()*32);
    return n;
}

function generate(){
    var out="";
    const low="abcdefghijklmnopqrstuvwxyz";
    const up="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num="0123456789";
    const sym="!-$^+";
    const size=document.getElementById("length").value;
    for(var i=0;i<size;i++){
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

function checks(){
    let lower,upper,numb,symbols=false;
    if($("#lowercase").is(":checked")){
        lower=true;
    }
    if($("#uppercase").is(":checked")){
        upper=true;
    }
    if($("#numbers").is(":checked")){
        numb=true;
    }
    if($("#symbols").is(":checked")){
        symbols=true;
    }
    generate();
}