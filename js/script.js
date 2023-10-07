



function teamDataJSON() { 
$.getJSON( "/team.json", function (data) { 


    $.each(data, function (index, team) {

        //setting object to correct displays
        var $teamDiv = $('<div>');
        var $name = $('<h2>').text(team.name);
        var $position = $('<h5>').text(team.position);
        var $bio = $('<p>').text(team.bio);

        //appending objects to the correct div
        $teamDiv.append($name, $position, $bio);
        $('#team').append($teamDiv);
    });
});
}


function teamDataAJAX() {

    //loading text
    $('#team').text('Loading...');

    setTimeout(() => {
    $.get('/team.json', function(data) {

            //clear #team from the loading message
            $('#team').empty();

            $.each(data, function(index, team) {

                //setting object to correct displays
                var $teamDiv = $('<div>');
                var $name = $('<h2>').text(team.name);
                var $position = $('<h5>').text(team.position);
                var $bio = $('<p>').text(team.bio);

                //appending objects to the correct div
                $teamDiv.append($name, $position, $bio);
                $('#team').append($teamDiv);
            });
        });
}, 3000);
}




$(document).ready(function() {

    teamDataJSON();
    // teamDataAJAX();

});