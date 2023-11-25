$(document).ready(function() {
    var characters;

    // Load characters from JSON file
    $.ajax({
        url: 'characters.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            characters = data;
            buildTable(characters);
        },
        error: function(error) {
            console.log('Error loading JSON data:', error);
        }
    });

    // Function to build the table
    function buildTable(data) {
        var tableBody = $('#characters-table tbody');
        tableBody.empty();

        $.each(data, function(index, character) {
            var row = $('<tr>');
            $.each(character, function(key, value) {
                $('<td>').text(value).appendTo(row);
            });
            tableBody.append(row);
        });

        // Add click event to table headings for sorting
        $('#characters-table th').click(function() {
            var key = $(this).data('key');
            sortTable(key);
        });
    }

    // Function to sort the table
    function sortTable(key) {
        characters.sort(function(a, b) {
            var x = a[key];
            var y = b[key];
            return (x < y) ? -1 : (x > y) ? 1 : 0;
        });

        var chevron = $('.chevron');
        chevron.html('');

        if ($(this).hasClass('asc')) {
            characters.reverse();
            chevron.html('&#x25B2;');
            $(this).removeClass('asc').addClass('desc');
        } else {
            chevron.html('&#x25BC;');
            $(this).removeClass('desc').addClass('asc');
        }

        buildTable(characters);
    }
});