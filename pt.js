// pt.js
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.sqaure');
    const police = document.getElementById('police');
    const container = document.querySelector('.container');

    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            let top, left;

            switch(index) {
                case 0:
                    top = square.offsetTop - container.offsetTop;
                    left = square.offsetLeft - container.offsetLeft;
                    break;
                case 1:
                    top = square.offsetBottom - container.offsetTop;
                    left = square.offsetLeft - container.offsetLeft;
                    break;
                case 2:
                    top = square.offsetTop - container.offsetTop;
                    left = square.offsetLeft - container.offsetLeft;
                    break;
                case 3:
                    top = square.offsetTop - container.offsetTop;
                    left = square.offsetLeft - container.offsetLeft;
                    break;
                case 4:
                    top = square.offsetTop - container.offsetTop;
                    left = square.offsetLeft - container.offsetLeft;
                    break;
            }

            police.style.top = `${top}px`;
            police.style.left = `${left}px`;
        });
    });
});
