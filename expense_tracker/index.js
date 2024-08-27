const expenceform = document.getElementById('expance-form')
const expencelist = document.getElementById('expencelist');
expenceform.addEventListener('submit' , function(event){ 
    event.preventDefault(); // for controll the loading of the page
    const desc = document.getElementById('desc').value;
    const  category = document.getElementById('category').value ;
    const amount = document.getElementById('amount').value;

    if(document && category && !isNaN(amount)){ 
        const newrow = document.createElement ('tr')
        newrow.innerHTML = `
        <td>${desc}</td>
        <td>${category}</td>
        <td>${amount}</td>`

        expencelist.appendChild(newrow)
    }
})