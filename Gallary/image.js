var allImage=document
console.log(allImage)
for(i=0;i<allImage.length;i++)
{
    allImage[i].src="./image/${i}.jpg"
    allImage[i].addEventListener("click",function(){
        document.getElementById("bigimage").style.backgroundImage=url(${this.src})
    })
}