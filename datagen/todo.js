var todo = [
    "Add buttons to remove categories, subcategories and origins.",
    "Add functionality to ",
    "Allow subcategories to be moved to other categories.",
    "Allow characters to be moved to other subcategories.",
    "Allow characters to be moved to other categories.",
    "Re-implement labels without everything else breaking.",
    "Finish making Settings tab.",
    "Finish making Manage Origins tab.",
    "Add functionality to the Create Subcategory button.",
    "Add functionality to the Create Category button."
];
var bugs = [
    "Edit Character Data tab breaks entirely if a category or subcategory with nothing in it is selected.",
    "Manage Categories tab breaks if someone attempts to move a character or subcategory into the next subcategory or category, respectively.",
    "Preview window doesn't work at all.",
    "Images don't work.",
    "Attempting to add a new character while anything but the first character in a subcategory is selected results in the character being added at the end of the subcategory and the first category being selected.",
    "All of the characters in a subcategory can be moved to a different subcategory, resulting in an empty subcategory. This works the same with subcategories being moved out of a category to create an empty category."
];
document.getElementById("todo").innerHTML = "<strong style=\"font-size:24px;\">To Do:</strong><br><span>" +
todo.join("</span><br><span>") + "</span><br>";
document.getElementById("currentBugs").innerHTML = "<strong style=\"font-size:24px;\">Currently Known Bugs:</strong><br><span>" +
bugs.join("</span><br><span>") + "</span><br>";