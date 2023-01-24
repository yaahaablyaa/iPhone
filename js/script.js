let img = document.querySelector('.left')
let btns = document.querySelectorAll('button[data-iphone]')

colors = {
   purple: "./img/Purple.png",
   gold: "./img/gold.png",
   silver: "./img/silver.png",
   black: "./img/black.png"
}

btns.forEach(btn => {
   btn.onclick = () => {
      let key = btn.getAttribute('data-iphone')
      img.style.backgroundImage = `url("${colors[key]}")`
   }
})

let color_text = document.querySelector('.color_text')
let purple = document.querySelector('.purple')
purple.onmouseenter = () => {
   color_text.innerHTML += 'Purple'
}

let gold = document.querySelector('.gold')
gold.onmouseenter = () => {
   color_text.innerHTML += 'Gold'
}

let silver = document.querySelector('.silver')
silver.onmouseenter = () => {
   color_text.innerHTML += 'Silver'
}

let black = document.querySelector('.black')
black.onmouseenter = () => {
   color_text.innerHTML += 'Black'
}