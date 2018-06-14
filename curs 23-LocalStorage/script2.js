window.onload = ()=>{

    class Phones {
        constructor(){
            this.name = "";
            this.imageUrl = null;
            this.quantity = null;
            this.price = null;
        }
    }
    
    const docName = document.getElementById('name');
    const docImage = document.getElementById('image');
    const docQuantity = document.getElementById('quantity');
    const docPrice = document.getElementById('price');
    let add_btn = document.getElementById('add_item');

    const phones = [{
        id: 1,
        name: "Telefon mobil HTC U 11, Dual SIM, 64GB, 4G, Brilliant Black",
        imageUrl: "https://s12emagst.akamaized.net/products/6053/6052836/images/res_151cbf9f491dc8b1555e14bfe5a60fbc_150x150_bpqg.jpg",
        quantity: 5,
        price: 1200
    },{
        id: 2,
        name: "Acumulator extern A+, 20000 mAh",
        imageUrl: "https://s12emagst.akamaized.net/products/8023/8022875/images/res_afbd4b05ee5bd92012da2404452eb9ed_450x450_lfqn.jpg",
        quantity: 15,
        price: 300
    },{
        id: 3,
        name: "Acumulator extern Smart Charge 1010 10000 mAh cablu micro USB Negru",
        imageUrl: "https://s12emagst.akamaized.net/products/8168/8167260/images/res_70379d488494cd7c8c5d4012bdb680c9_450x450_d5do.jpg",
        quantity: 7,
        price: 150
    },{
        id: 4,
        name: "Telefon mobil Meizu M6, Dual SIM, 32GB, 4G, Black",
        imageUrl: "https://s12emagst.akamaized.net/products/14586/14585039/images/res_154d644544cb77ce57d6b6b87aa108e0_450x450_19s3.jpg",
        quantity: 7,
        price: 1000
    },{
        id: 5,
        name: "Telefon mobil Nokia 3, Dual SIM, 16GB, Copper White",
        imageUrl: "https://s12emagst.akamaized.net/products/8665/8664917/images/res_fd6e9f225340a180c38950103c489c4e_450x450_u1ak.jpg",
        quantity: 7,
        price: 1685
    }];

    function populate(){
        localStorage.setItem('phones',JSON.stringify(phones));
        const phonesString = localStorage.getItem('phones');
        const phonesObj = JSON.parse(phonesString);
        for(var i = 0;i<phonesObj.length;i++){
            let phone = phonesObj[i];
            let list = document.getElementById('list');
            const article = document.createElement('article');
            const name = document.createElement('p');
            name.innerHTML = phone.name;
            const image = document.createElement('img');
            image.setAttribute('src',phone.imageUrl);
            const price = document.createElement('p');
            price.innerHTML = 'Price : ' + phone.price;
            const form = document.createElement('form');
            const nr_bucati = document.createElement('input');
            nr_bucati.setAttribute('value',phone.quantity);
            form.appendChild(nr_bucati);
            const buy = document.createElement('button');
            buy.innerHTML = 'Buy';
            buy.setAttribute('class','btn_buy');
            buy.setAttribute('data_id',phone.id)
            article.appendChild(name);
            article.appendChild(image);
            article.appendChild(price);
            article.appendChild(form);
            article.appendChild(buy);
            list.appendChild(article);
            
            const btn_buy = document.querySelector('[data_id = "'+ phone.id +'"]');
            btn_buy.addEventListener('click',(e)=>{
                phone.quantity --;
                if(phone.quantity < 1){
                    //console.log(phone.quantity);
                    phone.quantity = 0;
                    nr_bucati.style.color = "red"; 
                    localStorage.removeItem(phone); 

                } 
                nr_bucati.value = phone.quantity;
                

                
               
                localStorage.setItem('phones',JSON.stringify(phone));
                localStorage.getItem('phones');
                phones.push(phone);

            });
        }
    }
    add_btn.addEventListener('click',function(e){
        
        e.preventDefault();

        //console.log(docName.value);
        const new_phone = new Phones();
        new_phone.name = docName.value;
        new_phone.imageUrl = docImage.value;
        new_phone.quantity = docQuantity.value;
        new_phone.price = docPrice.value;
        phones.push(new_phone);

        console.log(phones);
        docPrice.value = "";

        
    });
    
    populate();
    

    
    
}

