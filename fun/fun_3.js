function ageInTime(theAge) {
  if(theAge >10 && theAge < 100){
    let days = theAge * 365;
    console.log(`${days} days`);
    console.log(`${days * 24} hours`);
    console.log(`${theAge * 12} months`)
    console.log(`${Math.floor(days / 7)} weeks`)

  }else{
    console.log("Age Out Of Range")
  }
}

// مش فاهمه ازاى الاسابيع طلعت بالكسور
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
