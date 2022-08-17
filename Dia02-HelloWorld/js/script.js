function typeWriter()  {
    const title = document.querySelector('.title')
    console.log(title)
    const text = title.innerHTML
    ;
    (function _type(i = 0) {
      if (i === text.length) return
  
      title.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
      setTimeout(() => _type(i + 1), 200)
    })()
  }
  
  typeWriter()
 
