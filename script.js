`use strict`;

const container = document.querySelector(`.container`);
const input = document.querySelector(`.text_input`);

const btnSubmit = document.querySelector(`.btn`);
const btnReset = document.querySelector(`.reset_btn`);

function btnPressed(){
    
        if (input.value === `left` || input.value === `Left`|| input.value === `LEFT`) {
            container.style.justifyContent =  `start`;
        }
        else if (input.value === `right`|| input.value === `Right`|| input.value === `RIGHT`){
            container.style.justifyContent =  `end`;
        }
    
};

btnSubmit.addEventListener(`click`,function(){
    btnPressed();
});


btnReset.addEventListener(`click`,function(){
    container.style.justifyContent =  `center`;
    input.value = '';

})


document.addEventListener(`keydown`,function(e){
    if(e.key === 'Enter'){
        btnPressed();
    }
})