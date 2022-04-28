function displaypet() {
    let petdiv = document.getElementById("pets");
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        console.log(pet[i]);

    }
}
function displaycard() {
    let tmp = "";
    if (petSalon.pets.length > 0) {
        console.log("good");
        for (let i = 0; i < petSalon.pets.length; i++) {

            let pet = petSalon.pets[i];
            tmp += `<div class="pet"><div class="pet-header"><h4>${pet.petname}</h4><button onclick="deletePet();">🗑️</button>
            </div>
            <lable>${pet.age}</lable>
            <lable>${pet.gender}</lable>
            <lable>${pet.services}</lable>
            <lable>${pet.ownername}</lable>
            <lable>${pet.phone}</lable></div>`;
        }
        document.getElementById("pets").innerHTML = tmp;

    }
    else console.log("empty");

}