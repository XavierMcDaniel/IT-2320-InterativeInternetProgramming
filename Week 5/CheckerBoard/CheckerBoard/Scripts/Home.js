$(document).ready(function ()
{
    var cells = $(".cell");
    var pieces = $(".piece");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
        
    }

    pieces.bind('click', function () {
        var selected = $(this);

        $("pieces:even").css("background-color", "white");
        $("pieces:odd").css("background-color", "navy");
        selected.css("background-color", "darkorange");

        cells.bind('click', function (event) {
            if (selected.hasClass('red')) {
                $(this).addClass = 'red';
            } else if (selected.hasClass('black')) {
                $(this).addClass = 'black';
            }
            selected.css("background-color", "white");
        });
    });
});