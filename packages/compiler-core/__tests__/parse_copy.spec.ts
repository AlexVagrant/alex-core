import { ParserOptions } from '../src/options'
import { baseParse } from '../src/parse'
import { ElementNode } from '../src/ast'

describe('compiler: parse', () => {
  describe('whitespace management when adopting strategy preserve', () => {
    const parse = (content: string, options?: ParserOptions) =>
      baseParse(content, {
        whitespace: 'preserve',
        ...options
      })

    it('should preserve whitespaces in elements', () => {
      const ast = parse(`<span> </span>`)
      expect(ast.children.length).toBe(1)
      console.log(2068, ast.children, (ast.children[0] as ElementNode).children)
      // expect((ast.children[0] as ElementNode).children.length).toBe(1)
    })
  })
})
