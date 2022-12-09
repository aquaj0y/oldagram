const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.png",
    post: "images/post-vangogh.png",
    comment: "just took a few mushrooms lol",
    likes: 21
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.png",
    post: "images/post-courbet.png",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.png",
    post: "images/post-ducreux.png",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
  }
]


// van-gogh post
const avatar = document.getElementById("vangogh-avatar")

const vangoghPost = document.getElementById("vangogh-post")
vangoghPost.innerHTML = (`<img src="${posts[0].post}"/>`)

// number of likes
const vangoghLikes = document.getElementById("vangogh-likes")
vangoghLikes.textContent = posts[0].likes + " likes"

const vangoghLikeBtn = document.getElementById("vangogh-like-btn")
vangoghLikeBtn.addEventListener("click", function () {
  vangoghLikes.textContent = posts[0].likes + 1 + " likes"
})


// Courbet post:

const courbetPost = document.getElementById("courbet-post")


courbetPost.innerHTML = (`<img src="${posts[1].post}"/>`)

const courbetLikes = document.getElementById("courbet-likes")
courbetLikes.textContent = posts[1].likes + " likes"

const courbetLikeBtn = document.getElementById("courbet-like-btn")
courbetLikeBtn.addEventListener("click", function () {
  courbetLikes.textContent = posts[1].likes + 1 + " likes"
})


// Ducreux post:

const ducreuxPost = document.getElementById("ducreux-post")

ducreuxPost.innerHTML = (`<img src="${posts[2].post}"/>`)


const ducreuxLikes = document.getElementById("ducreux-likes")
ducreuxLikes.textContent = posts[2].likes + " likes"

const ducreuxLikeBtn = document.getElementById("ducreux-like-btn")
ducreuxLikeBtn.addEventListener("click", function () {
  ducreuxLikes.textContent = posts[2].likes + 1 + " likes"
})