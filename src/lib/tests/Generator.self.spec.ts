import test from 'ava'
import { Generator } from '../../'

const gen = new Generator()

test('Should have access to object', async (t) => {
    gen.object = { hello: 'world' }

    let res = gen.self({ self: 'hello' })
    t.true(res === 'world')
})

test('[eval] Should have access to object', async (t) => {
    gen.object = { hello: 'world' }

    let res = gen.self({ self: 'hello', eval: true })
    t.true(res === 'world')
})
