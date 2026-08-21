const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let p = ''
for (let i = 0; i < posts.length; i++) {
    p += `
        <div class="profile-info">
            <img src="${posts[i].avatar}">
            <div>
                <p class="profile-name"><strong>${posts[i].name}</strong></p>
                <p>${posts[i].location}</p>
            </div>
        </div>
        <img class="post-img" src="${posts[i].post}" alt="">
        <div class="icons">
            <img src="./images/icon-heart.png">
            <img src="./images/icon-comment.png">
            <img src="./images/icon-dm.png">
        </div>
        <div class="likes-info"><strong>${posts[i].likes} likes</strong></div>
        <p><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
    `
}

document.querySelector('section').innerHTML = p