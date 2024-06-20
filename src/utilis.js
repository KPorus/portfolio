export const displayDialogue = (text, onDisplayedEnd) => {
    const dialogueUi = document.getElementById('dialogue-container');
    const dialogue = document.getElementById('dialogue');

    dialogueUi.style.display = 'block';

    let index = 0;
    let content = '';

    const intervalRef = setInterval(() => {
        if (index < text.length) {
            content += text[index];
            dialogue.innerHTML = content;
            index++;
            return;
        }
        clearInterval(intervalRef);
    }, 5)

    const closeBtn = document.getElementById('close');

    function onClickClose() {
        onDisplayedEnd();
        dialogueUi.style.display = 'none';
        dialogue.innerHTML = '';
        clearInterval(intervalRef);
        closeBtn.removeEventListener('click', onClickClose);
    }

    closeBtn.addEventListener('click', onClickClose);

    addEventListener("keypress", (key) => {
        if (key.code === "Enter") {
            closeBtn.click();
        }
    });
}

export const setCamScale = (k) => {
    const resizeFactor = k.width() / k.height();
    if(resizeFactor <1){
        k.camScale(k.vec2(1));
        return ;
    }

    k.camScale(k.vec2(1.5))
}