$(document).ready(function()
{
    // SHOW EVENTS
    $('#registerBtn').click(function()
    {
        $('#eventContainer').fadeIn();
    });

    // HIDE EVENTS
    $('#hideBtn').click(function()
    {
        $('#eventContainer').fadeOut();
    });
});