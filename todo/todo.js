$(function() {

  $(".word").on("click", function(event) {
    var elementThatWasClicked = $(this)
    elementThatWasClicked.parent().remove()

  })

})
