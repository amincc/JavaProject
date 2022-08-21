


document.getElementById("but").addEventListener( "click" , () => {
    var bodyi = document.getElementById("bodyi") ;
    bodyi.style.backgroundColor = "#495e5f" ; 
}) ;

document.getElementById("but2").addEventListener( "click" , () => {
    var bodyi = document.getElementById("bodyi") ;
    bodyi.style.backgroundColor = "white" ; 
}) ;


// language mode 
var english = document.getElementById("english");
var but = document.getElementById("but");
var but2 = document.getElementById("but2");
let arab = document.getElementById("arab");
var titlo = document.getElementById("h3");
arab.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};

function setLanugage(getLanuage){
    if(getLanuage === "arabic") {
but.innerHTML = "الوضع الليلي";
but2.innerHTML = "الوضع العادي";
titlo.innerHTML = "راديو";
document.getElementById("volumetitle").innerHTML = "حجم الصوت";
document.getElementById("speedtitle").innerHTML = "سرعة الصوت";

}else if(getLanuage ==="english"){
    but.innerHTML = "dark mode";
    but2.innerHTML = "normal mode";
    titlo.innerHTML = "RADIO";
    document.getElementById("volumetitle").innerHTML = "VOLUME";
    document.getElementById("speedtitle").innerHTML = "SPEED";
    
}
};
// language mode end


// screen orientation  
function orien(){
if (screen.orientation.type =="landscape-primary" || screen.orientation.type == "landscape-secondary" ) {
document.body.style.backgroundColor = "black";
}else if(screen.orientation.type =="portrait-primary" || screen.orientation.type == "portrait-secondary"){
    document.body.style.backgroundColor = "brown";

}
addEventListener("load",orien);
addEventListener("orientationchange",orien);





}





    
// time and date
function updatedate() {
    var date = new Date() ;
    var settime = document.getElementById("settime");
    settime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() ;
    var setdate = document.getElementById("setdate");
    setdate.innerHTML = date.getDate()+"-"+parseInt(date.getMonth()+1) + " - " + date. getFullYear() ;

}
setInterval(updatedate,100);
onload = updatedate();

// radio 
class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        this.audios[0] = "http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
        this.audios[1] = "https://webradio.tda.dz/Jeunesse_64K.mp3";
        this.audios[2] = "https://webradio.tda.dz/ElBahdja_64K.mp3";
    
        this.names = [];
        this.names[0] = "Radio KURD";
        this.names[1] = "JIL FM";
        this.names[2] = "Radio ELBAHJA";
        
        this.numberAudio =0;

     

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("titleradio").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();

// speed volume
class Speed_Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");

        var speed = document.getElementById("speed");
        speed.addEventListener("change",()=>{
         this.audio_file.playbackRate = speed.value / 100;
        });
       
    }

}
onload =new Speed_Volume();
// speed volume end


// voice volume 
class Volume{
    constructor(){

        this.audio_file = document.getElementById("audio_file");

        var volume = document.getElementById("volume");
        this.audio_file.volume= 50/100;
        
        volume.addEventListener("change",()=>{
         this.audio_file.volume = volume.value / 100 ;
        } );
    }

}
onload = new Volume();
// voice volume end


// bg color
class Colors{
    constructor(){
        // if(localStorage.getItem("SaveColor")==null){
    
        //     document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        // }

    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

    this.color3 = document.getElementById("color-3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color-3");
    });

    this.color4 = document.getElementById("color-4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color-4");
    });

    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        
        if(color == "color-1"){
            
            document.body.style.background = "rgb(27, 27, 27)";
        }
        else if(color == "color-2"){
           
            document.body.style.background ="#ff5353";
        }

        else if(color == "color-3"){
           
            document.body.style.background ="cadetblue";
        }

        else if(color == "color-4"){
           
            document.body.style.background ="black";
        }
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();

window.addEventListener('offline' , () => {
alert("OOPS YOU LOST YOUR NETWORK !. TRY AGAIN")
});

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position)
    }, 
    function(error){
        console.log(error)
    }
    )
}