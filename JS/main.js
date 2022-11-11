// autofill search using Jquery

$(".ui.search").search({
  type: "category",
  source: categoryContent,
  fullTextSearch: false,
});

// Onchange event || when result is click
document.querySelector(".category").addEventListener("click", function () {
  document.getElementById("btn_fetch").click(); // function to click invisble button.
});

// Function to get the value inside Input box
document.getElementById("btn_fetch").addEventListener("click", function () {
  var input_value = document.querySelector(".prompt").value; // This is the value of input

  // console.log(input_value);

  var index = categoryContent.findIndex((obj) => obj.title == input_value); // this is for the index no. of the said entry or choice

  // console.log(index);

  var hangeul = document.getElementById("hangeul"); // Container for Hangeul

  hangeul.innerHTML = categoryContent[index]["category"]; // this is the HANGEUL Value from search result

  // console.log(categoryContent[index]); // this is the index and value of the said option
});
