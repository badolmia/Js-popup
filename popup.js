document.addEventListener("DOMContentLoaded", function () {
    // Replace these tag names with the names of the sections you want to hide
    var sectionTags = ["section", "div", "article", "header", "footer", "form", "button"];

    // Loop through each section tag
    sectionTags.forEach(function (sectionTag) {
        // Get all elements with the current tag
        var sections = document.getElementsByTagName(sectionTag);

        // Loop through and hide each section with the current tag
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = "none";
        }
    });
});
