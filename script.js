  function columnNumbers(a) {
  let number = prompt("Please enter column's numbers","Max de 100");
  number=parseInt(number);

    if (number>100 || number <1) {
      alert("wrong number");
      return
    }
    const cont = document.querySelectorAll('.content'); 
    cont.forEach((a)=>{     
    document.querySelector('.container').removeChild(a);
  })

    for (let i=0;i<(number**2);i++) {      
      const content = document.createElement('div');
      const container = document.querySelector('.container'); 
      content.classList.add(`content`)
      content.style.cssText=`width:${960/number}px; height:${960/number}px;`
      container.appendChild(content);
    }
  const container = document.querySelector('.container'); 
  container.style.cssText=`grid-template: repeat(${number},auto)/repeat(${number},auto);`;
  



  }




  butt=document.querySelector('.butt');
  butt.addEventListener('click',columnNumbers);

  

  function mouseOver(a) {
    a.target.classList.add('moving');    
  }

  function mouseOut (a) {
    // a.target.style.background = 'darkgray'
    a.target.classList.remove('moving');    
  }

  const boxArray = document.querySelectorAll('.container');
  boxArray.forEach ((box) => {
    box.addEventListener('mouseover',mouseOver);
    box.addEventListener('mouseout',mouseOut);
  })
  
