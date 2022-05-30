// 1
// console.log(h1_id.innerText)




// 2
// document.write(h3_.textContent+"my dom app");




// 3
// var collection = document.getElementsByClassName("textE");
// console.log(collection);




// 4
// console.log(collection[1]);




// 5
// console.log(collection[2].innerText);



// 6
// console.log(document.getElementsByClassName("h1_same"))



// 7
// function getNameFromUser() {
//  var numUser =+prompt()
//   document.write("<h2>"+userNum+"</h2>")
// }
// getNameFromUser()



// 8
// function getFromUserNumAndColor() {
//   var numUser=prompt("enter num")
//   var userColor=prompt("enter color")
//   for(var i = 0 ; i < numUser; i++){
//     document.write("<span>"+" "+userColor+" "+"</span>")
//   }
// }
// getFromUserNumAndColor()





// 9
// function getTextAndTagName() {
//   var userTag = prompt("please enter a tag");
//   var userText = prompt("please enter text.");
//   document.write(userTag + " " + userText + " " + userTag);
// }
// getTextAndTagName();





// 10
function getInputFromUser() {
var userInput=prompt("please enter input type");
document.body.textContent=+"<input type="+userInput+"/>"
}
getInputFromUser()






// 11
// function mySome(text, group) {
//  var myGroup= document.getElementsByClassName(group)
//  for(var i =0; i < myGroup.length; i++){
//    myGroup[i].innerText=text
//  }
// }
// mySome("eldad","batel")






// 12
// function getP() {
//   var myP =document.getElementsByTagName("p")
//   for(var i = 0; i < myP.length; i++){
//     myP[i].innerHTML = "<span>"+"hello-world"+"</span>";
//   }
// }
// getP()






// 13
// function userInfo() {
//  var userIn={
//    name:prompt("please enter first name"),
//    lastName:prompt("please enter last name"),
//    age:prompt("please enter your age")
//   }
//   console.log(userIn)
//  if(userIn.age > 18){
// }
// alert("you are over 18.");
// }
// userInfo()






// 14
// function getMovie() {
//   var movie = {
//     name: prompt("whats the name of the movie?"),
//     numOfViews: prompt("how many views does the movie have?"),
//     year: prompt("what year the movie was realesed?"),
//     pic: prompt("pic of the movie"),
//   };
//   var pict = {
//     src: movie.pic
//   };
//   document.write(
//     "<h1>" +
//       movie.name +
//       "</h1>" +
//       "<h2>" +
//       movie.numOfViews +
//       "</h2>" +
//       "<h3>" +
//       movie.year +
//       "</h3>" +
//       "<img src= pict.src >"
//   );
// }
// getMovie();





// 15
// var worker = {
//   privateName: prompt("enter your private name"),
//   lastName: prompt("enter your last name"),
//   email: prompt("please enter your email"),
//   section: prompt("please enter your section at work."),
// };
// document.write(
//   "<h1>" +
//     worker.privateName +
//     "</h1>" +
//     "/" +
//     "<mark>" +
//     worker.lastName +
//     "</mark>" +
//     "/" +
//     "<i>" +
//     worker.email +
//     "</i>" +
//     "/" +
//     worker.section
// );




// 16
// function printConstructorBuilding() {
//   var numOfUser = prompt("please enter some random num");
//   for (var i = 0; i < numOfUser; i++) {
//     var bulding = {
//       constrName: prompt("what the name of the constructor?"),
//       companyName: prompt("what is the name of the companey?"),
//       numOfFloors: +prompt("how many floor in the building?"),
//       numOfApa: +prompt("how many APA in the building?"),
//     };
//     document.write(
//       "<h1>" +
//         bulding.constrName +
//         "</h1>" +
//         " " +
//         "<h2>" +
//         bulding.companyName +
//         "</h2>" +
//         " " +
//         "<strong>" +
//         bulding.numOfFloors +
//         " " +
//         "</strong>" +
//         " "+
//         "<span>" +
//         bulding.numOfApa +
//         " " +
//         "</span>"
//     );
//   }
// }
// printConstructorBuilding();
