let surah_index;
let display_bangla= true; //--bangla translation on/of----

// ----recived surah index number from sessionStorage-------
let sessionStorage_surah=parseInt(sessionStorage.getItem('quran_surah_index')) - 1 ;

surah_index=sessionStorage_surah;


// -----featch from multipul directory using "Promise.all"------
Promise.all([
    fetch('../doc-files/quran-simple-plain.xml').then(r=>r.text()),
    fetch('../doc-files/bn.bengali.xml').then(r=>r.text())
])
.then(([ar_data,bn_data])=> {parsing(ar_data, bn_data)}) 





function parsing(ar_data, bn_data){ //pars all data text to xml

    let ar_parser= new DOMParser().parseFromString(ar_data, 'text/xml');
    let bn_parser= new DOMParser().parseFromString(bn_data, 'text/xml');


    // -----target specific surah
    let ar_surah = ar_parser.getElementsByTagName('sura')[surah_index];
    let bn_surah = bn_parser.getElementsByTagName('sura')[surah_index];

    // console.log(ar_surah)
    // console.log(bn_surah)

render(ar_surah,bn_surah)  //---sent data to render function
button(ar_surah,bn_surah);
}





// ------button   -----

function button(ar_surah,bn_surah){

    let buttons= document.querySelector('button');

    document.addEventListener("click", (e)=>{
        console.log(e);

        console.log(buttons);
        display_bangla= !display_bangla;
        
       
        lode.style.display="flex";//,,,this is problem .. cause i am taking the variable from another js file 
            lode.style
        lode.style.background= 'transparent';
        console.log(lode);
        // -
        setTimeout(()=>{

            lode.style.display="none";
            render(ar_surah,bn_surah)
            
        },1500)

        console.log(display_bangla)
    })
    
}






function render(ar_surah, bn_surah){  //------render data----


    let ar_aya= ar_surah.getElementsByTagName('aya');
     let bn_aya= bn_surah.getElementsByTagName('aya');

    //  console.log(ar_aya.length)
    // console.log(bn_aya[1])

    let h1= document.querySelector('h1');
    h1.innerText= ar_surah.getAttribute('name')

    let aya_wrap_html= document.querySelector('.aya-wrap') //target the wraper section
    aya_wrap_html.innerHTML='';

    for(let i=0; i<ar_aya.length; i++){
         
        // arabic render in html
          let ar_text= document.createElement('div');
          ar_text.classList.add('ar-text');
          ar_text.innerHTML=`<span>${ar_aya[i].getAttribute('index')}</span> ${ar_aya[i].getAttribute('text')}`;

          aya_wrap_html.append(ar_text);

        //   bangla render in html

        if(display_bangla===true){
            
            let bn_text= document.createElement('div')
            bn_text.classList.add('bn-text');
            bn_text.innerText= ` ${bn_aya[i].getAttribute('text')} `;
            bn_text.style.textAlign= "center";
            ar_text.append(bn_text);
        }

    }
    


}



