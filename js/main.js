jQuery(document).ready(function($) {
		$('a[data-rel^=lightcase]').lightcase();
	});


  //Check new input in text form

function searchBox () {
	// Declare variables
	var input, filter, slides, slide, picture, i;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	slides = document.getElementsByClassName('slides');
	slide = document.getElementsByClassName('slide');

	// Loop through all slide(s) and hide those who dont match the search query
	for (i = 0; i < slide.length; i++) {
		boxText = slide[i].getElementsByTagName("p")[0];
		if (boxText) {
			if (boxText.innerHTML.toUpperCase().indexOf(filter) > -1) {
				slide[i].style.display = "";
			} else {
				slide[i].style.display = "none";
			}
		}
	}
}


//If doesnt equal alt or title attribute, hide

//If no text show all, hide none


/*
$('#box').keyup(function(){
   var valThis = $(this).val().toLowerCase();
    if(valThis == ""){
        $('.navList > li').show();
    } else {
        $('.navList > li').each(function(){
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
        });
   };
});
*/
