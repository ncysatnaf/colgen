import {curry, compose} from './utils'
import {parseHex} from 'h2r'
const Hex = () => '#'+Math.floor(Math.random()*16777215).toString(16)

const generate = (f,time) => {
  let arr = []
  for(let i = 0; i < time; i++ ){
    arr.push(f())
  }
  return arr
}

export const genHex = curry(generate,Hex)

export const genRgb = compose(parseHex,genHex)
