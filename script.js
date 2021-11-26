const parentBox = document.getElementById('boxParent');
const clickable = document.querySelector('.clickable');
const pageInfo = document.querySelector('.info');

const createNewBox = () => {
    setTimeout(() => {
        pageInfo.style.opacity = 0;
    }, 3000);

    setTimeout(() => {
        pageInfo.style.display = "none";
    }, 3500);

    const newBox = document.createElement('div');
    newBox.classList.add('box');
    parentBox.append(newBox);
    animateBoxes(newBox)
    clickable.addEventListener('click', toggleFullscreen)
}

const toggleFullscreen = () => {
    parentBox.classList.toggle('full_screen')
}

const animateBoxes = (box) => {
    let counter = 0,
        loop = setInterval(() => {
            if (counter <= 70) {
                box.style.display = "block"
                box.style.transform = `scale(${counter})`
                if (counter === 10) {
                    createNewBox();
                    // document.removeChild(box)
                }
            } else {
                counter = 0
                box.style.display = "none"
                box.style.transform = `scale(${0})`
                clearInterval(loop)
                parentBox.removeChild(box)
            }
            counter++;
        }, 90);
}


createNewBox()