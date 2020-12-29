window.onload = mystarter;
function mystarter(){
    let btn = document.getElementById("btn");
    searchbtn.addEventListener('click', async function(element) {
        element.preventDefault();
        var heroSearch = document.getElementById("superhero").value;
        var heroname = document.getElementsByClassName("name")[0]; 
        var alias = document.getElementsByClassName("alias")[0]; 
        var biography = document.getElementsByClassName("biography")[0];  
        var message = document.getElementsByClassName("message")[0];

        console.log(typeof(heroname));
        console.log(typeof(alias));
        console.log(typeof(biography));
        if (hero_form === ''){
            fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject("Something went wrong!")
                }
            })
            .then(data => {
                message.innerHTML = data;
                name.innerHTML = "";
                alias.innerHTML = "";
                biography.innerHTML = "";
            })
            .catch(error => console.log("There was an error: " + error));
        }else{
            
            fetch("superheroes.php", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(hero_form)
            })
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject("Something went wrong!")
                }
            })
            .then(data => {
                console.log(data);
                var hero = JSON.parse(data);
                console.log(hero);
                var name2 = hero["name"];
                var alias2 = "A.K.A  " + hero["alias"];
                var bio = hero["biography"];
                console.log(name2);
                console.log(alias2);
                console.log(bio);
                message.innerHTML = "";
                name.innerHTML = name2;
                alias.innerHTML = alias2
                biography.innerHTML = bio;
            });
        }     
    });
}