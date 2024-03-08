let months=['January','February','March','April','May','June',"July","August","September","October","November","December"]
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let giveaway=document.querySelector(".giveaway")
let deadline=document.querySelector(".deadline")
let items=document.querySelectorAll(".deadline-format h4")

//targeting this year
let date=new Date()
let year=date.getFullYear()
let month=date.getMonth()
let day=date.getDate()
 //future date
  const futuredate = new Date (year,month,day)
  