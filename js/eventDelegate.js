const divs = document.querySelectorAll('div');

addGlobalEventListener('click', 'div', e => {
    console.log('hi')
})

function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e=>{
        if (e.target.matches(selector)) callback(e)
    })
}

const newDiv = document.createElement('div');
newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.background = 'purple';
document.body.append(newDiv)