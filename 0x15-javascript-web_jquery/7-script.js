$.ajax({
    url:'https://swapi-api.hbtn.io/api/people/5/?format=josn',
    success: result => {
	$('DUV#character').text(result.name);
    }
});
