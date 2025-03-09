const video1 = document.getElementById('projectVideo1')
const video2 = document.getElementById('projectVideo2')
const videoList = [video1, video2]

const hoverSign = document.querySelector(".hover-sign")
const sideBar = document.querySelector('.sidebar')
const menu = document.querySelector('.menu-icon')
const close = document.querySelector('.close-icon')

//project video plays when user hovers and pauses when the cursor moves away
videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play();
        hoverSign.classList.add("active") //css defined animation
    })
    video.addEventListener('mouseout', function(){
        video.pause();
        hoverSign.classList.remove("active") //css defined animation
    }) 
})

//sidebar opens when user clicks on menu icon
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar") //css defined animation
    sideBar.classList.add("open-sidebar") //css defined animation
}) 

//sidebar closes when user clicks on X icon
close.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar") //css defined animation
    sideBar.classList.add("close-sidebar") //css defined animation
})
