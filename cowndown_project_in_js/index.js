const tragetDate = new Date('2025-01-01T00:00:00')

function Updatecoundown(){ 
    const CurrentDate = new Date();
    const timeDiffrence = tragetDate - CurrentDate
     
    const days = Math.floor ((timeDiffrence / (1000*60*60*24) ));

    const hours = Math.floor((timeDiffrence % (1000*60*60*24) )/ (1000*60*60));

    const min = Math.floor(timeDiffrence % (1000*60*60) / (1000* 60) )

    const sec = Math.floor (timeDiffrence %(1000*60)/1000)
 
    document.getElementById('coundown').innerHTML = `${days} d ${hours} h ${min} m ${sec}s`
      
setTimeout(Updatecoundown , 1000);

}  
Updatecoundown();