$allButtons = $('.buttons > li')
for(let i=0;i<$allButtons.length;i++){
    $allButtons.eq(i).on('click', ()=>{
        let index = $allButtons.eq(i).index()
        $('.images').css({transform: `translateX(${-i*920}px)`})
        $allButtons.eq(i).addClass('active').siblings('.active')
        .removeClass('active')
        n = index
    })
}

document.addEventListener('visibilitychange', ()=>{
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(()=>{
            $allButtons.eq(n%4).trigger('click')
            n += 1
        }, 5000)
    }
})

var n = 1
var timer = setInterval(()=>{
    $allButtons.eq(n%4).trigger('click')
    n += 1
}, 5000)

$('.slide').on('mouseenter', ()=>{
    window.clearInterval(timer)
})

$('.slide').on('mouseleave', ()=>{
    timer = setInterval(()=>{
        $allButtons.eq(n%4).trigger('click')
        n += 1
    }, 5000)
})