function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function backgroundCanvasInit(_width, _height) {
    var canvas = document.getElementById('background_canvas');
    var context = canvas.getContext('2d');

    canvas.width = _width;
    canvas.height = _height;

    var _pixel_length = Math.ceil(_width / 5);
    var _PIXELS = [];
    var _SPEED = 1;
    var _step = Math.floor(_pixel_length / 50);
    
    for (var i = 0; i < _pixel_length; i++) {
        var _modul = Math.sin(i / _step) * Math.sin(i / 10);
        _PIXELS.push({
            posX: _width / _pixel_length * i,
            baseY: _height / 2,
            posY: _height / 2,
            modul: _modul,
            width: 3,
            height: 3,
            color: '#cccccc'
        })
    }

    setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (_pixel of _PIXELS) {
            _pixel.posY += _pixel.modul * _SPEED;

            var _shift = (_pixel.baseY - _pixel.posY) / 10
            _pixel.posY += _shift;

            context.beginPath();
            context.fillStyle = _pixel.color;
            context.fillRect(_pixel.posX, _pixel.posY, _pixel.width, _pixel.height);
            context.closePath();
            context.fill();
        }

    }, 30);

    var _PREVEVENT, _CURREVENT;
    document.addEventListener("mousemove", function (event) {
        _CURREVENT = event;
        if (_PREVEVENT && _CURREVENT) {
            var movementX = Math.abs(_CURREVENT.screenX - _PREVEVENT.screenX);
            var movementY = Math.abs(_CURREVENT.screenY - _PREVEVENT.screenY);
            _SPEED = Math.sqrt(movementX * movementX + movementY * movementY);
        }
        _PREVEVENT = _CURREVENT;
    });
}

function backgroundGridInit(calc_v, calc_h) {
    var _hitems = Math.floor(calc_h / 400);
    var _vitems = Math.floor(calc_v / 400);

    var _hstatr_pos = (calc_h - (_hitems * 400)) / 2;
    var _vstatr_pos = (calc_v - (_vitems * 400)) / 2;


    for (var i = 0; i <= _hitems; i++) {
        var _hdelay = getRandom(0, 4000);
        var _hspeed = getRandom(6000, 12000);
        var _hline = '<div class="background__grid_hline" style="top: ' + (_hstatr_pos + (400 * i)) + 'px; animation-delay: ' + _hdelay + 'ms; animation-duration: ' + _hspeed + 'ms;"></div>';
        $('.js-background-grid').append(_hline);
    }
    for (var i = 0; i <= _vitems; i++) {
        var _vdelay = getRandom(0, 4000);
        var _vspeed = getRandom(6000, 12000);
        var _vline = '<div class="background__grid_vline" style="left: ' + (_vstatr_pos + (400 * i)) + 'px; animation-delay: ' + _vdelay + 'ms; animation-duration: ' + _vspeed + 'ms;"></div>';
        $('.js-background-grid').append(_vline);
    }
}

$(document).ready(function () {

    var wellcome_modal = new Vue({
        el: '#wellcome_modal',
        data: {
            wellcome_complete: false,
            ip: 'не определен',
            city: 'не определен',
        },
        methods: {
            SubmitWellcomeModal: function (data) {
                var _t = this;

                var _message = 'Резюме просматривает <b><u>' + data.name + '</u></b>';
                if (data.company.length > 0) {
                    _message += '\nиз компании <b><u>' + data.company + '</u></b>';
                }
                _message += '\nгород: <b><u>' + _t.city + '</u></b>';
                _message += '\nIP: <b><u>' + _t.ip + '</u></b>';

                var _data = {
                    exec: 'send_to_tg',
                    text: _message,
                };

                $.ajax({
                    type: 'POST',
                    url: '/api/',
                    data: _data
                });

                _t.wellcome_complete = true;
                hello_world.wellcome_complete = true;
                var _audio = document.getElementById('audio');
                _audio.play();
            },
            grabCityIp: function () {
                $.ajax({
                    type: 'GET',
                    url: 'https://ipapi.co/json/',
                    success: function (data) {
                        if (data.city) {
                            wellcome_modal.city = data.city;
                        }
                        if (data.ip) {
                            wellcome_modal.ip = data.ip;
                        }
                    },
                });
            }
        },
        mounted: function () {
            this.grabCityIp();
        }
    });

    var hello_world = new Vue({
        el: '#hello_world',
        data: {
            wellcome_complete: false,
            test: 'yo',
        }
    });

    var _WIDTH = document.documentElement.scrollWidth;
    var _HEIGHT = document.documentElement.scrollHeight;

    backgroundGridInit(_WIDTH, _HEIGHT);
    backgroundCanvasInit(_WIDTH, _HEIGHT);

    $(window).on('resize', function () {
        backgroundGridInit(_WIDTH, _HEIGHT);
        backgroundCanvasInit(_WIDTH, _HEIGHT);
    });

});