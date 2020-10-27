const brand = document.querySelector('.brand');
const bars = document.querySelector('.fa-bars');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const nav = document.querySelector('.navbar-items');
const mode = document.querySelector('.mode');
const li = document.querySelectorAll('.nav-item');


function change(x){
    x.classList.toggle("fa-times");
    const newLi = Array.from(li);
    
    if(x.classList.contains('fa-times')){
        brand.style.display = 'none';
        main.style.display = 'none';
        footer.style.display = 'none';
        nav.style.display = 'block';
        mode.classList.add('modal');
        newLi.forEach(i => (
            i.classList.add('liClass')
        ));
    }else{
        brand.style.display = 'block';
        main.style.display = 'block';
        footer.style.display = 'block';
        nav.style.display = 'none';
        mode.classList.remove('modal');
        newLi.forEach(i => (
            i.classList.remove('liClass')
        ));
    }
}


// bars.addEventListener('click', ()=>{
//     brand.style.display = 'none';
//     main.style.display = 'none';
//     footer.style.display = 'none';
// });