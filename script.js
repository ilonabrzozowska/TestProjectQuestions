$(document).ready(function()
{
    $('div#profile').dialog({
        autoOpen: false,
        width: $(window).width() * 0.8,
        modal: true, 
        open: function() { 
            $('.ui-widget-overlay').addClass('ui-grey-overlay'); 
        },
        close: function() { 
            $('.ui-widget-overlay').removeClass('ui-grey-overlay'); 
        },
    }).siblings('.ui-dialog-titlebar').remove();
    
    $('img.photo-circle').click(function() { 
        $('div#profile').dialog('open'); 
    });
    
    $('button.close-button').click(function() { 
        $('div#profile').dialog('close'); 
    });
});