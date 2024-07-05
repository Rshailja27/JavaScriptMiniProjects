
var form = document.querySelector("#myForm");
form.addEventListener("submit", ageCalculator);

function ageCalculator(event) {
  event.preventDefault();
  //document.getElementsByClassName("visible").style.visibility = "visible";
  var ageInYears = document.querySelector(".ageYears");
  var ageInMonths = document.querySelector(".ageMonths");
  var ageInWeeks = document.querySelector(".ageWeeks");
  var ageInDays = document.querySelector(".ageDays");
  var ageInHours = document.querySelector(".ageHours");
  var ageInMinutes = document.querySelector(".ageMinutes");
  var ageInSeconds = document.querySelector(".ageSeconds");

  var inputDOB = document.getElementById("myDob").value;
  var presentDate = document.getElementById("todaysDate").value;

  if (IsSupportedDateFormat(inputDOB) && IsSupportedDateFormat(presentDate)) {
    
    var myDob = GetValidDate(inputDOB);
    var todaysDate = GetValidDate(presentDate);

    var age = yearsCalculator(myDob, todaysDate);
    var allMonths = (age.years * 12) + age.months;
    var alldays = (age.totalDays % 7);
    
    ageInYears.innerHTML = `Your age is <b style ="color:red;">${age.years}</b> Years, 
    <b style ="color:red;"> ${age.months}</b> Months and <b style ="color:red;"> ${age.days}</b> Days`;
    ageInMonths.innerHTML = `Or <b style ="color:red;">${allMonths}</b> Months
     and <b style ="color:red;">${age.days}</b> Days`;
    ageInWeeks.innerHTML = `Or <b style ="color:red;">${age.weeks.toLocaleString("en-IN")}</b> Weeks 
    and <b style ="color:red;">${alldays}</b> days`;
    ageInDays.innerHTML = `Or <b style ="color:red;">${age.totalDays.toLocaleString("en-IN")}</b> days`;
    ageInHours.innerHTML = `Or <b style ="color:red;">${age.hours.toLocaleString("en-IN")}</b> hours. `;
    ageInMinutes.innerHTML = `Or <b style ="color:red;">${age.minutes.toLocaleString("en-IN")}</b> minutes.`;
    ageInSeconds.innerHTML = `Or <b style ="color:red;">${age.seconds.toLocaleString("en-IN")}</b> Seconds`;
    //   
  } else if(IsSupportedDateFormat(inputDOB) == " " && IsSupportedDateFormat(presentDate) == " ") {
    var requiredDob = document.querySelector(".reqDOB");
    var requiredPreDate = document.querySelector(".reqPresentDate");

    requiredDob.innerHTML = `Required, Please fill the valid Date`;   
    requiredPreDate.innerHTML = `Required, Please fill the valid Date`;
  }
  else if(IsSupportedDateFormat(inputDOB) == " ") {
    var requiredDob = document.querySelector(".reqDOB");
    requiredDob.innerHTML = `Required, Please fill the valid Date`;
  }
  else if(IsSupportedDateFormat(presentDate) == " " ) {
    var requiredPreDate = document.querySelector(".reqPresentDate");
    requiredPreDate.innerHTML = `Required, Please fill the valid Date`;
  }
  else {
    console.log("Invalid date entered.");
    // Show a message to the user indicating that the date is invalid
    alert("Invalid date entered. Please enter a valid date.");
  }
}

function IsSupportedDateFormat(dateString) {

  var dateFormat1 = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
  var dateFormat2 = /^\d{4}\/\d{2}\/\d{2}$/; // YYYY/MM/DD
  // var dateFormat3 = /^\d{2}-\d{2}-\d{4}$/; // MM-DD-YYYY
  // var dateFormat4 = /^\d{2}\/\d{2}\/\d{4}$/; // MM/DD/YYYY
  // var dateFormat5 = /^\d{2}-\d{2}-\d{4}$/; // DD-MM-YYYY
  // var dateFormat6 = /^\d{2}\/\d{2}\/\d{4}$/; // DD/MM/YYYY

  if (dateFormat1.test(dateString) || dateFormat2.test(dateString))
   // ||  dateFormat3.test(dateString) || dateFormat4.test(dateString) ||
    // dateFormat5.test(dateString) || dateFormat6.test(dateString)  )
    {
    return true;
  }
  return false;
}


function GetValidDate(dateString) {

  var dateFormat1 = /^\d{4}-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/; // YYYY-MM-DD
  var dateFormat2 = /^\d{4}\/(0[1-9]|1[0-2])\/([0-2][1-9]|3[01])$/; // YYYY/MM/DD
  // var dateFormat3 = /^(0[1-9]|1[0-2])-([0-2][1-9]|3[01])-\d{4}$/; // MM-DD-YYYY
  // var dateFormat4 = /^(0[1-9]|1[0-2])\/([0-2][1-9]|3[01])\/\d{4}$/; // MM/DD/YYYY
  // var dateFormat5 = /^(0[1-9]|[1-2][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;// DD-MM-YYYY
  // var dateFormat6 = /^(0[1-9]|[1-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; // DD/MM/YYYY
  //var dateFormat4 = /^\d{8}$/; // YYYYMMDD

  // Check if the input matches any of the expected formats
  if (dateFormat1.test(dateString)) {
    return GetDate(dateString, '-', 0, 1, 2); // YYYY-MM-DD
  } else if (dateFormat2.test(dateString)) {
    return GetDate(dateString, '/', 0, 1, 2); // YYYY/MM/DD
  } 
  // else if (dateFormat3.test(dateString)) {
  //   return GetDate(dateString, '-', 2, 0, 1); //  MM-DD-YYYY
  // } else if (dateFormat4.test(dateString)) {
  //   return GetDate(dateString, '/', 2, 0, 1); // MM/DD/YYYY
  // } else if (dateFormat5.test(dateString)) {
  //   return GetDate(dateString, '-', 2, 1, 0); // DD-MM-YYYY
  // } else if (dateFormat6.test(dateString)) {
  //   return GetDate(dateString, '/', 2, 1, 0); // DD/MM/YYYY
  // } 
  else {
    return null; // If none of the formats match, the date is invalid
  }

}

function GetDate(dateString, separator, yearIndex, monthIndex, dayIndex) {

  var parts = dateString.split(separator);
  // Extract year, month, and day from the parts
  var year = parseInt(parts[yearIndex], 10);
  var month = parseInt(parts[monthIndex], 10) - 1; // Months are 0-based in JS Date
  var day = parseInt(parts[dayIndex], 10);
  console.log(`Date format : ${dateString}`);
  console.log(`parts : ${parts}  and Year at : ${yearIndex}, month at : ${monthIndex}, day at : ${dayIndex}`);
  var date = new Date(year, month, day);
  console.log("Get Date function : " + date);
  return date
}

function yearsCalculator(date1, date2) {
  var diffInMilliseconds = Math.abs(date2 - date1);
  // Convert milliseconds to seconds, minutes, hours, and days
  var seconds = Math.floor(diffInMilliseconds / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var weeks = Math.floor(days / 7);
  var totalDays = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
  var years = 0;
  var months = 0;

  while (days >= 365) {
    var yearDays = (date1.getFullYear() % 4 == 0 && date1.getFullYear() % 100 != 0) ||
      date1.getFullYear() % 400 == 0 ? 366 : 365;
    if (days >= yearDays) {
      years++;
      days -= yearDays;
      date1.setFullYear(date1.getFullYear() + 1);
    } else {
      break;
    }
  }

  while (days >= 28) {
    var monthDays = new Date(date1.getFullYear(), date1.getMonth() + 1, 0).getDate();
    if (days >= monthDays) {
      months++;
      days -= monthDays;
      date1.setMonth(date1.getMonth() + 1);
    } else {
      break;
    }
  }

  return {
    years: years, months: months, days: days, weeks: weeks,
    hours: hours, minutes: minutes, seconds: seconds, totalDays: totalDays
  };
}
