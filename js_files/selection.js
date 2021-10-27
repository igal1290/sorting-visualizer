const selectionSortButton = document.querySelector('.selectionSort');

async function selectionSort() {
  const elem = document.querySelectorAll('.bar');

  for (let i = 0; i < elem.length; i++) {
    let minIndex = i;

    elem[i].style.background = '#f1f1f1';

    for (let j = i + 1; j < elem.length; j++) {
      elem[j].style.background = 'blue';
      await waitforme(time);

      if (
        parseInt(elem[j].style.height) < parseInt(elem[minIndex].style.height)
      ) {
        if (minIndex !== i) {
          elem[minIndex].style.background =
            'linear-gradient(90deg, #56ab2f, #a8e063)';
        }

        minIndex = j;
      } else {
        elem[j].style.background = 'linear-gradient(90deg, #56ab2f, #a8e063)';
      }
    }

    await waitforme(time);
    swap(elem[minIndex], elem[i]);

    elem[minIndex].style.background =
      'linear-gradient(90deg, #56ab2f, #a8e063)';

    elem[i].style.background = 'linear-gradient(90deg, #7b4397, #dc2430)';
  }
}

selectionSortButton.addEventListener('click', async () => {
  disableSortButton();
  disableNewArrayButton();
  disableSizeInput();
  await selectionSort();
  enableSortButton();
  enableNewArrayButton();
  enableSizeInput();
});
