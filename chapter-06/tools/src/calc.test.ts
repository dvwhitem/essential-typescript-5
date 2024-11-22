import { sum } from './calc'

test("Check result:", () => {
    let result = sum(10, 20, 30)
    expect(result).toBe(60)
})