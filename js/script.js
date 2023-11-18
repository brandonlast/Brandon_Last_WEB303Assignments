$(document).ready(function() {
    var characters = [];
    

    $.ajax({
        url: 'characters.json',
        dataType: 'json',
        success: function(data) {
            characters = data.characters;
            makeRows();
            appendRows();
            updateFilterCounts();
        },
        error: function(error) {
            console.log('Error fetching characters:', error);
        }
    });

    var rows = [],
        $search = $('#search'),
        $min = $('#countAM'),
        $max = $('#countNZ'),
        $table = $('#characters-table');

    

        function makeRows() {
            console.log('Characters:', characters);
            characters.forEach(function(character) {
                var $row = $('<tr></tr>');
                $row.append($('<td></td>').text(character.firstName));
                $row.append($('<td></td>').text(character.lastName));
                $row.append($('<td></td>').text(character.age));
                $row.append($('<td></td>').text(character.godlyParent));
                $row.append($('<td></td>').text(character.weapon));
                $row.append($('<td></td>').text(character.species));
                $row.append($('<td></td>').text(character.power));
                rows.push({
                    character: character,
                    $element: $row
                });
            });

            appendRows();
        }
        
        

    function appendRows() {
        var $tbody = $('<tbody></tbody>');
        rows.forEach(function(row) {
            $tbody.append(row.$element);
        });
        $table.append($tbody);
    }

    function updateFilterCounts() {
        var countAM = countCharactersByLastName('A', 'M');
        var countNZ = countCharactersByLastName('N', 'Z');
        $min.text(countAM);
        $max.text(countNZ);
    }

    $search.on('input', function() {
        searchCharacters();
    });


    function searchCharacters() {
        var searchTerm = $search.val().trim().toLowerCase();
    
        rows.forEach(function(row) {
            var firstName = row.character.firstName.toLowerCase();
            var hasMatch = firstName.includes(searchTerm);
    
            if (searchTerm === '' || hasMatch) {
                row.$element.addClass('filterSelected');
            } else {
                row.$element.removeClass('filterSelected');
            }
        });
    
        if (searchTerm === '') {
            rows.forEach(function(row) {
                row.$element.removeClass('filterSelected');
            });
        }
    }
    
    
    
    

    $('#filterAM').on('click', function() {
        filterByLastName('A', 'M');
    });

    $('#filterNZ').on('click', function() {
        filterByLastName('N', 'Z');
    });

    function filterByLastName(startLetterA, startLetterB) {
        rows.forEach(function(row) {
            var lastName = row.character.lastName.toUpperCase();
            var startLetter = lastName.charAt(0);
    
            if (startLetter >= startLetterA && startLetter <= startLetterB) {
                row.$element.show();
            } else {
                row.$element.hide();
            }
        });
    
        updateFilterCounts();
    }
    

    function countCharactersByLastName(startLetterA, startLetterB) {
        var count = 0;

        rows.forEach(function(row) {
            var lastName = row.character.lastName.toUpperCase();
            var startLetter = lastName.charAt(0);

            if (startLetter >= startLetterA && startLetter <= startLetterB) {
                count++;
            }
        });

        return count;
    }

});

