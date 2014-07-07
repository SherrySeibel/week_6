var result = $("#result");

  $("#dog").click(function() {
    result.html("You are incorrect. You are looking at a cat.")
  });

  $("#cat").click(function() {
    result.html("You correctly identified a cat!")
  });
