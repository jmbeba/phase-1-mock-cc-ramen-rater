// write your code here
const ramenMenu = document.getElementById("ramen-menu");
const detailImage = document.querySelector(".detail-image");
const detailName = document.querySelector(".name");
const detailRestaurant = document.querySelector(".restaurant")
const ratingDisplay = document.getElementById("rating-display");
const commentDisplay = document.getElementById("comment-display");
const form = document.getElementById("new-ramen");
const newName = document.getElementById("new-name");
const newRestaurant = document.getElementById("new-restaurant");
const newImage = document.getElementById("new-image");
const newRating = document.getElementById("new-rating");
const newComment = document.getElementById("new-comment");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/ramens", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            "name": newName.value,
            "restaurant": newRestaurant.value,
            "image" : newImage.value,
            "rating" : newRating.value,
            "comment" : newComment.value
        })
    }).then(res => res.json()).then(data => console.log(data))
})

fetch("http://localhost:3000/ramens").then(res => res.json()).then(data => {
    data.map(({id, name, restaurant, image,rating, comment}) => {
        const img = document.createElement("img");
        img.src = image;

        ramenMenu.appendChild(img);

        img.addEventListener("click", () => {
            detailImage.src = image;
            detailImage.alt = name;

            detailName.textContent = name;
            detailRestaurant.textContent = restaurant;
            ratingDisplay.textContent = rating;
            commentDisplay.textContent = comment;
        })
    })
})