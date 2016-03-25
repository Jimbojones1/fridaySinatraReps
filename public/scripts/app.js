var data = {}

$(document).ready(function(){

console.log('window is loaded')

  $('#submitButton').on('click', function(e){

    e.preventDefault()
    getFormData()
    $.ajax(ajax)

  })

})// end of doc ready


function getFormData(){
  data.name = $('#name').val()
  data.email = $('#mail').val()
  data.password = $('#password').val()
}

var ajax = {
  url: "/taco",
  data: data,
  type: 'POST',
  success: function(){
    console.log('i did it')
  },
  error: function(err){
    console.log(err)
  }
}
