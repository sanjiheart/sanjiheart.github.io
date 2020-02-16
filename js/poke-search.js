$(function () {

    const redirectDomain = 'https://wiki.52poke.com/zh-hant';

    $('#convert').click(() => {
        window.open(`${redirectDomain}/${$('#source').val()}`, '_blank');
    });

});