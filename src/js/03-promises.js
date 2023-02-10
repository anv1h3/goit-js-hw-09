import Notiflix from 'notiflix';

Notiflix.Notify.init({fontSize: '18px',});


const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');

let userData = {
  amount: 0,
  delay: 0,
  step: 0,
};
let position = 0;

form.addEventListener('input', userInputSave);
submitBtn.addEventListener('click', buildPromises)

function userInputSave(e){
  userData[e.target.name] = e.target.value;
}

function buildPromises(e){
  e.preventDefault();
for (let i = 0; i < userData.amount; i+=1) {

  const delay = Number(userData.delay) + (Number(userData.step)*(i));

  setTimeout(() => {
    position +=1;
    
    createPromise(position, delay).then(
      (resolve) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
     },
     (reject) => {
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`)
     })
  }, delay)
 }

}


function createPromise(position, delay){
  
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      
      if(shouldResolve){
          resolve ({position, delay});
        } else {
          reject ({position, delay});
        }
       
    })    

}
