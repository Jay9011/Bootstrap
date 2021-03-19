let $showSpinner = function (e) { install(window, e) }
let $removeSpinner = function (e) { remove(window, e) }

function install(el, e) {
    let dom = '<div id="front_spinner">'
        + '<div class="spinner_back">'
        + ' <div class="spinner_img">'
        + '     <div class="spinner-grow spinner-grow-sm text-primary animation_delay_100" role = "status">'
        + '     <span class="visually-hidden">Loading...</span></div>'
        + '     <div class="spinner-grow spinner-grow-sm text-primary animation_delay_200" role = "status">'
        + '     <span class="visually-hidden">Loading...</span></div>'
        + '     <div class="spinner-grow spinner-grow-sm text-primary animation_delay_300" role="status">'
        + '     <span class="visually-hidden">Loading...</span></div>'
        + ' </div>'
        + ' <div class="spinner-text">'
        + ' <span id="spinner-message">'+ e.message +'</span>'
        + ' </div>'
        + '</div>'
        + '</div> ';
    if (document.querySelector('#front_spinner')) {
        $('#spinner-message').text(e.message);
        return;
    } else {
        $('body').append(dom);
        scrollDisable();
    }
}

function remove(el, e) {
    if (document.querySelector('#front_spinner')) {
        $('#front_spinner').remove();
        scrollAble();
    } else {
        return;
    }
}

function scrollDisable(){
    $('#front_spinner').bind('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
    });
}
function scrollAble(){
    $('#front_spinner').unbind('scroll touchmove mousewheel', function (e) {
    });
}