let search = document.getElementById("searchInput");
let allNamesDOMCollection = document.getElementsByClassName("card");


search.addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    //debug console.log(searchQuery);
    let allNamesDOMCollection = document.getElementsByClassName("card");


    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();


        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[i].style.display = null;
        } else {
            allNamesDOMCollection[i].style.display = "none";
        }
    }
});