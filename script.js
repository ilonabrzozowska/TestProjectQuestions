$(document).ready(function()
{
    $('div#profile').dialog({
        autoOpen: false,
        width: $(window).width() * 0.9,
    }).siblings('.ui-dialog-titlebar').remove();
    
    $('img.photo-circle').click(function() { 
        $('div#profile').dialog('open'); 

    });
    
    $('button.close-button').click(function() { 
        $('div#profile').dialog('close'); 

    });
});