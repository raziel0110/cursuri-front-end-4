// window.console
console.log('Usual console!');
console.warn('this is an warn');
console.error('console.error');

window.onload = ()=>{

//const iframebody = document.getElementById('frame_body').innerHTML = "Something new";

    window.name = "Master window."
    const openWindowButton = document.getElementById('new_window');
    openWindowButton.addEventListener('click',()=>{
        window.open('file:///C:/Users/Maverick/Desktop/cursuri%20practice%20javascript/cursuri-front-end-4/Curs%2022-BOM/secondPage.html','_parent');
    }); 

}