$(function() {
    $('#yes').click(function(event) {
        modal('爱你😘 爱你😘 爱你😘 啵啵啵。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('宝贝恭喜你选对了 那么以后你做饭！', A);
    });
});

function A() {
    modal('你洗碗！', B);
}

function B() {
    modal('你洗衣服！', C);
}

function C() {
    modal('哈哈哈。。。', D);
}

function D() {
    modal('感动得稀里糊涂得吧😘', E);
}

function E() {
    modal('没事儿，继续往下看。', F);
}

function F() {
    modal('我怎么怎么舍得让你做这些呢', G);
}

function G() {
    modal('我们可以一起', H);
}

function H() {
    modal('你做饭我洗菜！', I);
}

function I() {
    modal('爱你。么么哒！', J)
}

function J() {
    modal('每天都要开开心心的哦！😘😘😘', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
