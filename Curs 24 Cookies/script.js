// // GET Cookies

// console.log(document.cookie);

// //SET cookie

// document.cookie = "name = Gabi";
// console.log(document.cookie);

// Get cookies


//set cookie
document.cookie = "color=green";
document.cookie = "username=John Doe";
document.cookie = "lang=en-US";
console.log(document.cookie);

const getCookies = () => {
  const cookieItem = {};
  const cookiesString = document.cookie;
  // color=green; username=John Doe; lang=en-GB
  const separatedEntries = cookiesString.split(';');
  // [color=green, ' username=John Doe', ' lang=en-GB']
  separatedEntries.forEach((entry) => {
    // entry <=> ' username=John Doe'
    const trimmedEntry = entry.trim();
    // trim removes the extra space entry <=> 'username=John Doe'
    const splitEntry = trimmedEntry.split('=');
    // splitEntry ['username', 'John Doe']
    cookieItem[splitEntry[0]] = splitEntry[1];
    // cookieItem <=> {username: 'Joh n Doe'}
  });
  
  return cookieItem;
}


window.onload = () => {
  // check the radio button for lang retrived from cookies
  const cookies = getCookies();
  const userLang = cookies.lang;
  if (userLang) {
    document.querySelector(`[value=${userLang}]`).setAttribute('checked', true);
  }
  
  // update cookie when user changes lang option
  const radioBtns = document.querySelectorAll('input[type=radio]');
  radioBtns.forEach((btn) => {
    btn.addEventListener('change', (e) => {
      const newLang = e.target.value; // en-US
      document.cookie = `lang=${newLang}`; // "lang=" + newLang
    });
  });
  
}