const theme = document.getElementById("theme")
const body = document.body.style
const navigationBar = document.querySelector(".navigationBar").style 
const a = document.querySelectorAll("a")
const cntnt = document.querySelector(".cntnt").style
const left = document.querySelector(".left").style
const srch = document.querySelector(".search").style
const srchInput = document.getElementById("srchInput").style
const search = document.getElementById("search").style
const serch = document.getElementById("srchInput")
const google = document.getElementById("google")
const yahoo = document.getElementById("yahoo")
const duck = document.getElementById("duckduckgo")
const bing = document.getElementById("bing")
let searchURL = "www.google.com"
let selectedEngine = 0
let srchOpen = 0
let th = sessionStorage.getItem("th")
function changeTheme(){
let th = sessionStorage.getItem("th")
    if(th==0){                             //light theme
        body.backgroundColor = "black"
        body.color = "black"
        theme.style.rotate = "20deg"
        theme.style.color = "black"
        document.querySelector(".themeBox").style.backgroundColor = "rgb(188, 101, 214)"
        navigationBar.backgroundColor = "rgb(188, 101, 214)"
        navigationBar.color = "black"
        cntnt.backgroundColor = "rgb(188, 101, 214)"
        left.backgroundColor = "rgb(188, 101, 214)"
        for(i of a){
            i.style.color="black"
        }
        sessionStorage.setItem("th",1)
        srchInput.borderColor = "white"
        srchInput.background = "linear-gradient(rgb(51, 51, 51),rgb(0, 0, 0))"
        srchInput.color = "white"
        search.color = "black"
        if(srchOpen===1){
            search.color = "grey"
            search.background = "black"
        }
    }
    else{                                   //dark theme
        body.backgroundColor = "white"
        body.color = "white"
        theme.style.rotate = "-20deg"
        theme.style.color = "white"
        document.querySelector(".themeBox").style.backgroundColor = "rgb(119, 169, 20)"
        navigationBar.backgroundColor = "rgb(119, 169, 20)"
        navigationBar.color = "white"
        cntnt.backgroundColor = "rgb(119, 169, 20)"
        left.backgroundColor = "rgb(119, 169, 20)"
        for(i of a){
            i.style.color="white"
        }
        sessionStorage.setItem("th",0)
        srchInput.borderColor = "black"
        srchInput.background = "linear-gradient(rgb(255, 255, 255),rgb(175, 175, 175))"
        srchInput.color = "black"
        search.color = "white"
        if(srchOpen===1){
            search.color = "rgb(49, 49, 49)"
            search.background = "white"
        }
    }
    setScale(selectedEngine)
}

function executeSearch(){
    if(srchOpen===1){
        srch.scale = "0"
        setTimeout(() => {
            srch.translate = "0 0"
        }, 75);
        srchOpen = 0
        search.background = "transparent"
        if(sessionStorage.getItem("th")==0) search.color = "white"
        else    search.color = "black"
        search.scale = "1"
        search.borderRadius = "0"
        return
    }
    setTimeout(() => {
        srch.scale = "1"
    }, 25);
    srch.translate = "0 150px"
    srchOpen = 1
    if(sessionStorage.getItem("th")==0){
        search.color = "rgb(49, 49, 49)"
        search.background = "whitesmoke"
    }
    else{
        search.color = "grey"
        search.background = "black"
    }
    search.scale = "1.5"
    search.borderBottomRightRadius = "25px";
    search.borderTopLeftRadius =  "25px";
}
function isValidUrl(string) {
    for(i of string){
        if(i==='.') return 1
    }
    return 0
  }
function searchFunc(){
    if(serch.value==""){
        return
    }
    if(isValidUrl(serch.value)){
        window.location.replace("http://"+serch.value)
        return
    }
    window.open(`https://${searchURL}/search?q=${serch.value}`,"_blank")
}
function setScale(i){
    const sEngines = document.getElementsByClassName("sEngine")
    if(sessionStorage.getItem("th")==1){
        for(let a=0;a<4;a++){
            if(a===i){
                sEngines[a].style.scale = "1.15"
                sEngines[a].style.borderColor = "rgb(188, 101, 214)"
                continue
            }
            sEngines[a].style.scale = "1"
            sEngines[a].style.borderColor = "transparent"
        }
    }
    else{
        for(let a=0;a<4;a++){
            if(a===i){
                sEngines[a].style.scale = "1.15"
                sEngines[a].style.borderColor = "rgb(119, 169, 20)"
                continue
            }
            sEngines[a].style.scale = "1"
            sEngines[a].style.borderColor = "transparent"
        }
    }
}
function googleF(){
    setScale(0)
    selectedEngine = 0
    searchURL = "www.google.com"
}
function yahooF(){
    setScale(2)
    selectedEngine = 2
    searchURL = "www.yahoo.com"
}
function duckF(){
    setScale(3)
    selectedEngine = 3
    searchURL = "www.duckduckgo.com"
}
function bingF(){
    setScale(1)
    selectedEngine = 1
    searchURL = "www.bing.com"
}

document.querySelector(".themeBox").addEventListener("click",changeTheme)
document.getElementById("newTab").addEventListener("click",()=>{window.open("C:/Users/Dell/OneDrive/Desktop/Study/Home Page/home.html",'_blank')})
document.getElementById("home").addEventListener("click",()=>{window.open("C:/Users/Dell/OneDrive/Desktop/Study/Home Page/home.html","new window","width=2200,height=1600")})
document.getElementById("search").addEventListener("click",executeSearch)
serch.addEventListener("change",searchFunc)
document.getElementById("srchBtn").addEventListener("click",searchFunc)
google.addEventListener("click",googleF)
yahoo.addEventListener("click",yahooF)
duck.addEventListener("click",duckF)
bing.addEventListener("click",bingF)
document.getElementById("tictactoe").addEventListener("click",()=>{window.open("C:/Users/Dell/OneDrive/Desktop/Study/Tic-Tac-Toe/ttt.html",'_blank')})
document.getElementById("facebook").addEventListener("click",()=>{window.open("https://www.facebook.com","_blank")})
document.getElementById("hotstar").addEventListener("click",()=>{window.open("https://www.hotstar.com","_blank")})
document.getElementById("netflix").addEventListener("click",()=>{window.open("https://www.netflix.com","_blank")})
document.getElementById("amazon").addEventListener("click",()=>{window.open("https://www.amazon.com","_blank")})
document.getElementById("kflix").addEventListener("click",()=>{window.open("https://karsanth-flix.netlify.app","_blank")})


if(th==1){                             //light theme
    body.backgroundColor = "black"
    body.color = "black"
    theme.style.rotate = "20deg"
    theme.style.color = "black"
    document.querySelector(".themeBox").style.backgroundColor = "rgb(188, 101, 214)"
    navigationBar.backgroundColor = "rgb(188, 101, 214)"
    navigationBar.color = "black"
    cntnt.backgroundColor = "rgb(188, 101, 214)"
    left.backgroundColor = "rgb(188, 101, 214)"
    for(i of a){
        i.style.color="black"
    }
    sessionStorage.setItem("th",1)
    srchInput.borderColor = "white"
    srchInput.background = "linear-gradient(rgb(51, 51, 51),rgb(0, 0, 0))"
    srchInput.color = "white"
}
else{                                   //dark theme
    body.backgroundColor = "white"
    body.color = "white"
    theme.style.rotate = "-20deg"
    theme.style.color = "white"
    document.querySelector(".themeBox").style.backgroundColor = "rgb(119, 169, 20)"
    navigationBar.backgroundColor = "rgb(119, 169, 20)"
    navigationBar.color = "white"
    cntnt.backgroundColor = "rgb(119, 169, 20)"
    left.backgroundColor = "rgb(119, 169, 20)"
    for(i of a){
        i.style.color="white"
    }
    sessionStorage.setItem("th",0)
    srchInput.borderColor = "black"
    srchInput.background = "linear-gradient(rgb(255, 255, 255),rgb(175, 175, 175))"
    srchInput.color = "black"
}
setScale(selectedEngine)