document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.sqaure');
    const police = document.getElementById('police');
    const button1 = document.getElementById('b1');
    const button2 = document.getElementById('b2')
    const button3 = document.getElementById('b3')
    const button4 = document.getElementById('b4')
    const button5 = document.getElementById('b5')
    const button6 = document.getElementById('b6')
    const button7 = document.getElementById('b7')
    const button8 = document.getElementById('b8')
    const button9 = document.getElementById('b9')
    const button10 = document.getElementById('b10')
    const button11 = document.getElementById('b11')
    const button12 = document.getElementById('b12')
    const buttons = [button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12]


buttons.forEach(button=>{
    button.addEventListener("click",()=>{


        const rect = button.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const left = rect.left + window.scrollX;

        police.style.top = `${top + (rect.height - police.offsetHeight) / 2}px`;
        police.style.left = `${left + (rect.width - police.offsetWidth) / 2}px`;

    })
})

});
