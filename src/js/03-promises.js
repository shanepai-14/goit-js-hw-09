import Notiflix from 'notiflix';

const form = document.querySelector('.form');
function getFormValues() {


 const delay = Number(form.elements["delay"].value);
 const step = Number(form.elements["step"].value);
 const amount = Number(form.elements["amount"].value);

 for (var position = 1; position <= amount; position++) {
  const delays = delay + step * position;

  createPromise(position, delays).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}
form.addEventListener("submit", function(event) {

  event.preventDefault();
  getFormValues();
  event.currentTarget.reset();
});



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
