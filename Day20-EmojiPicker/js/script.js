const emojis = [ 
  '🚀',
  '😀',
  '😃',  
  '😄',  
  '😁',  
  '😆',  
  '😅',  
  '🤣',  
  '😂',  
  '🙂',  
  '🙃',  
  '🫠',  
  '😉',  
  '😊',
  '😇',  
  '🥰', 
  '😍',
  '🤩',  
  '😘', 
  '😗',  
  '😚', 
  '😙',  
  '🥲',  
  '😋',  
  '😛',  
  '😜',  
  '🤪', 
  '😝',  
  '🤑',  
  '🤗',  
  '🤭',  
  '🫢',  
  '🫣',  
  '🤫',  
  '🤔', 
  '🫡',  
  '🤐',  
  '🤨',  
  '😐️',  
  '😑',  
  '😶',  
  '🫥',  
  '😶‍🌫️',  
  '😏',  
  '😒',  
  '🙄',  
  '😬',  
  '😮‍💨',  
  '🤥',  
  '😌', 
  '😔',  
  '😪',  
  '🤤',  
  '😴',  
  '😷',  
  '🤒',  
  '🤕',  
  '🤢',  
  '🤮',  
  '🤧',  
  '🥵', 
  '🥶',  
  '🥴',  
  '😵',  
  '😵‍💫', 
  '🤯',  
  '🤠',  
  '🥳', 
  '🥸',  
  '😎', 
  '🤓',  
  '🧐',  
  '😕',  
  '🫤', 
  '😟',  
  '🙁', 
  '☹️', 
  '😮', 
  '😯',  
  '😲',  
  '😳',  
  '🥺',
  '🥹',  
  '😦',  
  '😧',  
  '😨',  
  '😰',  
  '😥',  
  '😢',  
  '😭',  
  '😱',  
  '😖',  
  '😣',  
  '😞',  
  '😓',  
  '😩',  
  '😫',  
  '🥱',  
  '😤',  
  '😡',  
  '😠',  
  '🤬',  
  '😈',  
  '👿',  
  '💀',  
  '☠️',  
  '💩',  
  '🤡',  
  '👹',  
  '👺',  
  '👻',  
  '👽️',  
  '👾', 
  '🤖',  
  '😺',  
  '😸',  
  '😹',  
  '😻',
  '😼',  
  '😽',  
  '🙀',  
  '😿',  
  '😾',  
  '🙈',  
  '🙉',  
  '🙊',  
  '💋', 
  '💌',  
  '💘',  
  '💝',  
  '💖',  
  '💗',  
  '💓',  
  '💞',  
  '💕',  
  '💟',  
  '❣️',  
  '💔',  
  '❤️‍🔥',  
  '❤️‍🩹',  
  '❤️',  
  '🧡',  
  '💛',  
  '💚',  
  '💙',  
  '💜',  
  '🤎',  
  '🖤',  
  '🤍',  
  '💯',  
  '💢',  
  '💥',  
  '💫'
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