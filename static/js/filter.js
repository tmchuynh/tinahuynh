var filterOptions = document.getElementById("myDropdown");

var filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", function() {
    console.log("clicked");
    // filterOptions.classList.toggle("show");
    console.log(filterOptions);
    filterOptions.classList.toggle("d-flex");
});


function toggleFilterMenu() {
    filterOptions.classList.toggle("d-flex");
}


document.addEventListener("click", (evt) => {
    let userClick = evt.target;

    do {
        if (userClick == filterOptions || userClick == filterBtn) {
            return;
        }
        userClick = userClick.parentNode;

    } while (userClick);
    if (filterOptions.classList.contains("d-flex")) {
        filterOptions.classList.toggle("d-flex");
    }
});


var timeFilter = document.getElementById("times");
var titleFilter = document.getElementById("title");
var publishFilter = document.getElementById("published");

/**
 * Filters by reading time
 */
 timeFilter.addEventListener("click", function() {
    let i, article, reading_time, approve, switching = true;

    while (switching) {

        article = document.querySelectorAll("#blog-list > li");

        reading_time = document.querySelectorAll(".reading-time");
        console.log(reading_time);

        // by default, the loop only executes once
        switching = false;
        approve = false;
        // all cards get looked through
        for (i = 0; i < (article.length - 1); i++) {
            console.log(i, reading_time);
            console.log(article);
            // Checks if the first letter of the first name holds a greater value
            if (reading_time[i].innerHTML > reading_time[i + 1].innerHTML) {
                // if so, it is earlier on in the alphabet and the switch gets approved
                article[i].parentElement.insertBefore(article[i + 1], article[i]);
                approve = true;
            }
        }

        if (approve) {
            // The cards get switched and all the article get checked again
            // article[i].parentElement.insertBefore(article[i + 1], article[i]);
            switching = true;
        } else {
            // if the article did not move, all changes have finished
            switching = false;
        }
    }

    toggleFilterMenu();
});