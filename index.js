let video = document.querySelector('.video')
let speed = document.querySelector('.speed')
let speedV = document.querySelector('.speedV')
let f = false
let maxspeed = 3.8
let minspeed = 0.2
speedV.style.height = `${video.playbackRate/(maxspeed+minspeed)*100}%`
speedV.innerText = `${video.playbackRate}x`
speed.onmousemove = e => {
  if(f){
    let y = e.layerY
    let percentage = (y/379*100)
    let absoluteSpeed = parseFloat((maxspeed*percentage/100)+minspeed).toFixed(2)
    console.log(absoluteSpeed)
    speedV.style.height = `${percentage}%`
    speedV.innerText = `${absoluteSpeed}x`
    video.playbackRate = absoluteSpeed
  }
}
speed.onmouseleave = () =>{
  f = false
}
speed.onmousedown = () =>{
  f = true
}
speed.onmouseup = () =>{
  f = false
}
