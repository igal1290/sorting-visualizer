const bubbleSortButton = document.querySelector('.bubbleSort');

async function bubbleSort() {
  const elem = document.querySelectorAll('.bar');

  for (let i = 0; i < elem.length - 1; i++) {
    for (let j = 0; j < elem.length - i - 1; j++) {
      elem[j].style.background = 'blue';
      elem[j + 1].style.background = 'blue';

      if (parseInt(elem[j].style.height) > parseInt(elem[j + 1].style.height)) {
        await waitforme(time);
        swap(elem[j], elem[j + 1]);
      }

      elem[j].style.background = 'linear-gradient(90deg, #56ab2f, #a8e063)';
      elem[j + 1].style.background = 'linear-gradient(90deg, #56ab2f, #a8e063)';
    }

    elem[elem.length - 1 - i].style.background =
      'linear-gradient(90deg, #7b4397, #dc2430)';
  }

  elem[0].style.background = 'linear-gradient(90deg, #7b4397, #dc2430)';
}

bubbleSortButton.addEventListener('click', async () => {
  disableSortButton();
  disableNewArrayButton();
  disableSizeInput();
  await bubbleSort();
  enableSortButton();
  enableNewArrayButton();
  enableSizeInput();
});
