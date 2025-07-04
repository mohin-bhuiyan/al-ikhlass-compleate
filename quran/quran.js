fetch('doc-files/surahs_full.json')
.then(response=> response.json())
.then(data=> main(data));


function main(data){
    console.log(data)

    

    let surah_list_wrapper= document.querySelector(".surah-list-wrapper")
    

     data.forEach( data => {
                
        let surah_div= document.createElement('div');
        surah_div.classList.add('surah-div');
        surah_div.innerHTML=`<a href="quran_reading/qr_reading_page.html"> 
                 <div class="left">
                    <div class="num"> 
                      <h3>${data.number}</h3>
                    </div>
                  <div class="name">
                    <h2>${data.bangla}</h2>
                    <h1>${data.english}</h1>
                    
                  </div>
                    
                </div>

                <div class="right"><h4>${data.arabic}</h4>
                    <p>(${data.meaning})</p>
                </div>
                </a>`;


                // store surah number in localstorage
                    surah_div.addEventListener('click',()=>{
            sessionStorage.setItem('quran_surah_index', data.number);
                    })



                surah_list_wrapper.append(surah_div);

     });

    
}

