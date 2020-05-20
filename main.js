/* eslint-env browser */

const text = document.createElement('p')
text.innerText = '𓂸'
document.body.appendChild(text)
const heading = document.createElement('h1')
heading.innerText = text.offsetWidth !== 10 ? 'The 𓂸 character is not censored.' : 'The 𓂸 character is censored.'
document.body.appendChild(heading)
text.remove()
