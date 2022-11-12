
  
  for (let i=0;i<256;i++) {
  const content = document.createElement('div');
  const container = document.querySelector('.container');
    
    content.classList.add('content')
    container.appendChild(content);
  }

  function mouseOver(a) {
    a.target.style.background = 'red';
  }
  function mouseOut (a) {
    a.target.style.background = 'darkgray'
    
  }
  const boxArray = document.querySelectorAll('.container');
  boxArray.forEach ((box) => {
    box.addEventListener('mouseover', mouseOver);
    box.addEventListener('mouseout',mouseOut);
  })
  
