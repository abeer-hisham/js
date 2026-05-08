function checkStatus(a, b, c) {

  let name;
  let age;
  let status;

  if (typeof a === "string") name = a;
  else if (typeof b === "string") name = b;
  else name = c;

  if (typeof a === "number") age = a;
  else if (typeof b === "number") age = b;
  else age = c;

  if (typeof a === "boolean") status = a;
  else if (typeof b === "boolean") status = b;
  else status = c;

 
  if (status === true) {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
  } else {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
  }
}

// ده حليته بالجى بى تى بس كنت فاهمه الفكره
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"