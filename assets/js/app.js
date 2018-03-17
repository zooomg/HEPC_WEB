$('.ui.dropdown').dropdown();
$('.ui.checkbox').checkbox({
    onChecked: function() {},
    onUnchecked: function() {}
    });
$('#termbox').checkbox({
    onChecked: function() {
        $('#submitButton').attr('class',"ui basic inverted right floated submit button");
    },
    onUnchecked: function() {
        $('#submitButton').attr('class',"ui disabled basic inverted right floated submit button");
    }
});
$('#prime').change(function(){
    if(this.checked){
    $('#std2 :input').prop('disabled', true);
    $('#std3 :input').prop('disabled', true);
    $('#std2').attr('class',"five disabled fields");
    $('#std3').attr('class',"five disabled fields");
    // useless iteration actually
    }
});
$('#maven').change(function(){
    if(this.checked){
    $('#std2 :input').prop('disabled', false);
    $('#std3 :input').prop('disabled', false);
    $('#std2').attr('class',"five fields");
    $('#std3').attr('class',"five fields");
    // useless iteration actually
    }
});
$('.ui.dimmable').dimmer({
    on : 'click'
});
$('.ui.accordion').accordion({
    selector: {
    trigger: '.title .icon'
    }
});