import { faker } from '@faker-js/faker'
var Generator = require('../build/main').Generator

const gen = new Generator()

let res
console.time('faker new')
res = gen.custom({ generator: faker, input: 'lorem.words' })
console.timeEnd('faker new')

console.time('faker eval')
res = gen.custom({ generator: faker, input: 'lorem.words', eval: true })
console.timeEnd('faker eval')
