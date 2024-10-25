let muzyka = document.getElementById("barka")

document.addEventListener("click", () => {
  
  if (muzyka.paused) {

    muzyka.play()

  } else {

    muzyka.pause()
    
  }

})