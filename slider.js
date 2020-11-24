function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No Slider Found!');
  }
  // create vars for working with slider
  let current;
  let previous;
  let next;
  // select needed elements
  const slides = slider.querySelector('.slides');
  const prevButton = document.querySelector('.goToPrev');
  const nextButton = document.querySelector('.goToNext');

  const startSlider = () => {
    current = slider.querySelector('.current') || slides.firstElementChild;
    previous = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  };

  const applyClasses = () => {
    current.classList.add('current');
    previous.classList.add('prev');
    next.classList.add('next');
  };

  const move = (direction, stuff) => {
    console.log(slides);
    const classesToRemove = ['prev', 'current', 'next'];
    previous.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back') {
      [previous, current, next] = [
        previous.previousElementSibling || stuff.lastElementChild,
        previous,
        current,
      ];
    } else {
      [previous, current, next] = [
        current,
        next,
        next.nextElementSibling || stuff.firstElementChild,
      ];
    }

    applyClasses();
  };

  startSlider();
  applyClasses();

  prevButton.addEventListener('click', () =>
    move('back', slider.querySelector('.slides'))
  );
  nextButton.addEventListener('click', () =>
    move('foward', slider.querySelector('.slides'))
  );
}

const mySlider = Slider(document.querySelector('.slider'));
