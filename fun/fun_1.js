function sayHello(theName, theGender) {
    if(theGender == "Male"){
        console.log(`Hello Mr ${theName}`);
    }else if(theGender == "Female"){
        console.log(`Hello Miss ${theName}`);
    }else{
          console.log(`Hello ${theName}`);

    }
}

// السؤال بقى  مش بيشتغل غير لو الحرف كابيتل ليه

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"