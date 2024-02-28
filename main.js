const paragraph = $('p').addClass('text')

//paragraph.addClass('text')


document.querySelector('p').addEventListener('text')

//addEventListener
$('button').on('click', ()=>{
    console.log('button pushed')
})

document.createElement('p')

const newParagraph = $('<p></p>')

newParagraph.text('this is new text')//innerText

paragraph.append('newParagraph') //appendChild

newParagraph.html('<input/>') //innerHTML

$('button').on('click', ()=>{
    const text = $('input')
    text.val('this changed') //value
})