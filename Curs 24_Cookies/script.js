//GET Cookies
console.log(document.cookie);

//SET cookie
document.cookie = "color = green";
document.cookie = "username = Gabi";
document.cookie = "lang=en-US";

console.log(document.cookie);

  const getCookies =()=>{
  const cookieItem = {};
  const cookiesString = document.cookie;
   //color=green; username=Gabi; lang=en-GB
  const separatedEntrie = cookiesString.split(';');
    // dupa split va fi un array ["color=green","username=Gabi",....]
  separatedEntrie.forEach((entry)=>{
    //entry <=> 'username = Gaby'
    const trimmEntrie = entry.trim();
    //trim removes extraspaces entry => 'username=Gaby'
    const splitEntry = trimmEntrie.split('=');
    //splitEntry['username','gabi']
    
    cookieItem[splitEntry[0]] = splitEntry[1];
    
  });
 return cookieItem;
}


window.onload = () =>{
  
  // checked the radio button for lang retrieve from cookies
const cookies = getCookies();
const userLang = cookies.lang;
  console.log(userLang);
    if(userLang){
      document.querySelector(`[value=${userLang}]`).setAttribute('checked','true');
    }
  // update cookie when uder change radio
  
  const radioBts = document.querySelectorAll('input[type=radio]');
//   for(var i = 0; i < radioBts.length;i++){
//     const btn = radioBts[i];                         varianta mai veche(sau pentru chromul de pe macbook);
//   }
  radioBts.forEach((btn)=>{
    btn.addEventListener('change',(e)=>{
    const newLang = e.target.value;
    console.log(newLang);
    document.cookie = `lang=${newLang}`; //"lang="+ newLang
      //console.log(document.cookie);
  });
  });
  
}
//   `lang=${newLang}` => varianta ES6