const emojis = [ 
  '๐',
  '๐',
  '๐',  
  '๐',  
  '๐',  
  '๐',  
  '๐',  
  '๐คฃ',  
  '๐',  
  '๐',  
  '๐',  
  '๐ซ ',  
  '๐',  
  '๐',
  '๐',  
  '๐ฅฐ', 
  '๐',
  '๐คฉ',  
  '๐', 
  '๐',  
  '๐', 
  '๐',  
  '๐ฅฒ',  
  '๐',  
  '๐',  
  '๐',  
  '๐คช', 
  '๐',  
  '๐ค',  
  '๐ค',  
  '๐คญ',  
  '๐ซข',  
  '๐ซฃ',  
  '๐คซ',  
  '๐ค', 
  '๐ซก',  
  '๐ค',  
  '๐คจ',  
  '๐๏ธ',  
  '๐',  
  '๐ถ',  
  '๐ซฅ',  
  '๐ถโ๐ซ๏ธ',  
  '๐',  
  '๐',  
  '๐',  
  '๐ฌ',  
  '๐ฎโ๐จ',  
  '๐คฅ',  
  '๐', 
  '๐',  
  '๐ช',  
  '๐คค',  
  '๐ด',  
  '๐ท',  
  '๐ค',  
  '๐ค',  
  '๐คข',  
  '๐คฎ',  
  '๐คง',  
  '๐ฅต', 
  '๐ฅถ',  
  '๐ฅด',  
  '๐ต',  
  '๐ตโ๐ซ', 
  '๐คฏ',  
  '๐ค ',  
  '๐ฅณ', 
  '๐ฅธ',  
  '๐', 
  '๐ค',  
  '๐ง',  
  '๐',  
  '๐ซค', 
  '๐',  
  '๐', 
  'โน๏ธ', 
  '๐ฎ', 
  '๐ฏ',  
  '๐ฒ',  
  '๐ณ',  
  '๐ฅบ',
  '๐ฅน',  
  '๐ฆ',  
  '๐ง',  
  '๐จ',  
  '๐ฐ',  
  '๐ฅ',  
  '๐ข',  
  '๐ญ',  
  '๐ฑ',  
  '๐',  
  '๐ฃ',  
  '๐',  
  '๐',  
  '๐ฉ',  
  '๐ซ',  
  '๐ฅฑ',  
  '๐ค',  
  '๐ก',  
  '๐ ',  
  '๐คฌ',  
  '๐',  
  '๐ฟ',  
  '๐',  
  'โ ๏ธ',  
  '๐ฉ',  
  '๐คก',  
  '๐น',  
  '๐บ',  
  '๐ป',  
  '๐ฝ๏ธ',  
  '๐พ', 
  '๐ค',  
  '๐บ',  
  '๐ธ',  
  '๐น',  
  '๐ป',
  '๐ผ',  
  '๐ฝ',  
  '๐',  
  '๐ฟ',  
  '๐พ',  
  '๐',  
  '๐',  
  '๐',  
  '๐', 
  '๐',  
  '๐',  
  '๐',  
  '๐',  
  '๐',  
  '๐',  
  '๐',  
  '๐',  
  '๐',  
  'โฃ๏ธ',  
  '๐',  
  'โค๏ธโ๐ฅ',  
  'โค๏ธโ๐ฉน',  
  'โค๏ธ',  
  '๐งก',  
  '๐',  
  '๐',  
  '๐',  
  '๐',  
  '๐ค',  
  '๐ค',  
  '๐ค',  
  '๐ฏ',  
  '๐ข',  
  '๐ฅ',  
  '๐ซ'
]

const wrapperEmojis = document.querySelector('.wrapper-emojis')

function showEmojis() {
  for(let i = 0; i < emojis.length; i++) {
    wrapperEmojis.innerHTML += `<span>${emojis[i]}</span>` 
  }
}

showEmojis()

function showMessage() {
  document.querySelector(".myTooltip").classList.add('tooltiptext');
  setTimeout(() => {
    document.querySelector(".myTooltip").classList.remove('tooltiptext');
  }, "2000")
}

const campomoji = document.querySelector('.campomoji')

function showTooltip() {
  const campomoji = document.querySelector('.campomoji')
  campomoji.select();
  campomoji.setSelectionRange(0, 2);
  navigator.clipboard.writeText(campomoji.value);
  showMessage()  
  clearSelection()
}

const allSpans = document.querySelectorAll('.wrapper-emojis span')
const spans = Array.from(allSpans)

function selectEmoji() {
  spans.map((span) => {
    span.addEventListener('click', () => {
      campomoji.value = span.innerText;
      showTooltip()
    })
  })
}

selectEmoji()

function clearSelection()
{
 if (window.getSelection) {window.getSelection().removeAllRanges();}
 else if (document.selection) {document.selection.empty();}
}