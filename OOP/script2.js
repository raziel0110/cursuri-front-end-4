var userData = [
{
    name : "Alban Gabriel",
    age : 33,
    nrKm : 250000,
    todayKm : 300
},
{
    name : "Lupan Nelu",
    age : 32,
    nrKm : 100000,
    todayKm : 32
},
{
    name : "Sitar Bodan",
    age : 27,
    nrKm :356000,
    todayKm : 57
}];

function Driver(data){
    data = data || {};
    this.name = data.name || "";
    this.age = data.age || 0;
    this.nrKm = data.nrKm || 0;
    this.todayKm = data.todayKm || 0;
}

Driver.prototype.kmParcursi= function(){
    var totalKm = this.nrKm + this.todayKm;
    // console.log(totalKm);
    return totalKm;
}

for(var i = 0; i < userData.length;i++){
    var sofer = new Driver(userData[i]);
    // console.log(sofer);
    var distanta = sofer.kmParcursi();
    console.log(sofer.name + ' a condus in total '+ distanta);
    
}