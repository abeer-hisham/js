let userName = document.getElementById('name');
let email = document.getElementById('em');
let age = document.getElementById('age');
let country = document.getElementById('country');


userName.addEventListener('input', function(){
    sessionStorage.setItem('name' , userName.value);
})

    if(sessionStorage.getItem("name")){
    userName.value = sessionStorage.getItem("name");
}



email.addEventListener('input', function(){
    sessionStorage.setItem('em' , email.value)
})   

if(sessionStorage.getItem("em")){
    email.value = sessionStorage.getItem("em");
}

age.addEventListener('input', function(){
    sessionStorage.setItem('age' , age.value)
})


if(sessionStorage.getItem("age")){
    age.value = sessionStorage.getItem("age");
}


country.addEventListener('change', function(){
    sessionStorage.setItem('country' , country.value)
})


if(sessionStorage.getItem("country")){
    country.value = sessionStorage.getItem("country");
}