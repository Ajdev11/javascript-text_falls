function createHeart(){
    const heart = document.createElement('heart')
         heart.classList.add('heart')
         heart.innerText = 'Moses is a genius'
         heart.style.left = Math.random() * 100 + 'vw'
         heart.animationDuration = Math.random() * 2 + 3 + '5'
        document.body.appendChild(heart)
        setTimeout(()=> {heart.remove}, 5000)
}
setInterval(createHeart, 300)