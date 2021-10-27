const insertionSortButton = document.querySelector('.insertionSort');

async function insertionSort() {
  const elem = document.querySelectorAll('.bar');

  elem[0].style.background = '#f1f1f1';

  for (let i = 1; i < elem.length; i++) {
    let j = i - 1;
    let current = elem[i].style.height;

    elem[i].style.background = 'blue';

    await waitforme(time);

    while (j >= 0 && parseInt(current) < parseInt(elem[j].style.height)) {
      elem[j].style.background = 'blue';
      elem[j + 1].style.height = elem[j].style.height;
      j--;

      await waitforme(time);

      for (let k = i; k >= 0; k--) {
        elem[k].style.background = 'linear-gradient(90deg, #7b4397, #dc2430)';
      }
    }

    elem[j + 1].style.height = current;
    elem[i].style.background = 'linear-gradient(90deg, #7b4397, #dc2430)';
  }
}

insertionSortButton.addEventListener('click', async () => {
  disableSortButton();
  disableNewArrayButton();
  disableSizeInput();
  await insertionSort();
  enableSortButton();
  enableNewArrayButton();
  enableSizeInput();
});
