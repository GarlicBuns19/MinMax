const arr = []
const array = document.getElementById('array')

// Enter into Array
const btnAdd = document.querySelector('#btnAdd')
btnAdd.addEventListener('click' , (x) => {
    x = document.getElementById('inputNum').value ;
    let i = arr.length ;
    arr[i] = x ;
    
    if (i >= 1) {
        array.innerHTML += ', '
    }
    array.innerHTML += arr[i] ;
    i++;
    document.getElementById('arr').value = '';
    document.getElementById('arr').focus();
})

// Min Max Calculation
const minx = document.getElementById('min')
const maxx = document.getElementById('max')
const cal = document.getElementById('cal')

cal.addEventListener('click' , (min,max) => {
    min = Math.min(...arr)
    minx.innerHTML = min + 'lowest';

    max = Math.max(...arr)
    maxx.innerHTML = max + 'highest';
})