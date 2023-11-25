let ratingCtn=document.querySelector(".ctn");
let msg=document.querySelector(".rating-ctn");

  document.querySelector(".ctn button").addEventListener("click",()=>{
    ratingCtn.classList.add("hide");
   msg.classList.add("show-msg");
  })
  // collect selected option
  let rate=document.querySelector(".rate");
document.querySelectorAll("li").forEach((i)=>{i.addEventListener("click",function(){rate.textContent=this.innerText})})