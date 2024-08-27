fetch('./myfile.txt')
.then(responce =>{ 

    if(!responce.ok){ 
        throw new Error('Network is not responces')
    }
    return responce.text();


}) 
.then(data => console.log(data)) 
.catch(error => console.log("error")
)


// json file fatch data 
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(responce =>{ 
    if(!responce.ok){ 
        throw new Error("api does not responces ")
    } return responce.json();
 })
 .then(data => 
   data.forEach(element => {
    console.log(element.title);
   })

    
 )