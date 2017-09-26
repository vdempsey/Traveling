//business logic
function Destination(location, year) {
  //this.image = img;
  this.location = location;
  this.year = year;
}

Destination.prototype.fullDescription = function() {
  return this.location + " " + this.year;
}



//user interface logic
$(document).ready(function() {
  var ireland = new Destination("Ireland", 2015);
  var poland = new Destination("Poland", 2015);
  var israel = new Destination("Israel", 2014);
  var newDestination = [ireland, poland, israel];
  //$("h5").click(function() {
    $("img#ireland").click(function() {
      $("h2.name").text(ireland.fullDescription());
      $("img#masada").hide();
      $("img#krakow").hide();
      $("p").show();
      $("span.reload").click(function(){
        location.reload();
      });

    //  $(document.getElementById("ireland").style.maxWidth = "100%");
    });
    $("img#masada").click(function() {
      $("h2.name").text(israel.fullDescription());
      $("img#krakow").hide();
      $("img#ireland").hide();
      $("p").show();
      $("span.reload").click(function(){
        location.reload();
      });
    });
    $("img#krakow").click(function() {
      $("h2.name").text(poland.fullDescription());
      $("img#masada").hide();
      $("img#ireland").hide();
      $("p").show();
      $("span.reload").click(function(){
        location.reload();
      });
    });

  //  $(".country h2").text(newCountry.location);
  //   $(".year").text(newCountry.year);
});
  // var originalCountry = $(".country-name").val();
  // //var originalImg = $("img.photo").val();
  // if (originalCountry === "Ireland" || originalCountry === "Poland") {
  //   var originalYear = "2015";
  // }
  // else {
  //   var originalYear = "2016";
  // }
  // var newCountry = new Destination(originalCountry, originalYear);
  // $("ul").append("<li><span class='country'>" + newCountry.fullDescription() + "</span></li>");
  // $("h2").click(function() {
  //   $("img.photo").show();
  //   $(".country h3").text(newCountry.location);
  //   $(".year").text(newCountry.year);
  // });
