$(function () {
  function addemup() {
    var percentageheld = ($(".tokensheld").val() / $(".supply").val()) * 100;

    $(".float-pc").text(percentageheld);

    var marketvalue = $(".price").val() * $(".tokensheld").val();

    $(".market-val").text(marketvalue);

    var percentowned = ($(".tokensheld").val() / $(".supply").val()) * 100;

    var investment = (percentowned / 100) * $(".cap").val();

    $(".float-pc").text(percentowned);

    $(".invest-val").text(investment);
  }

  $("input[type=text]").change(function () {
    addemup();
  });
});