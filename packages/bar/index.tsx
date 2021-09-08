import codegen from 'codegen.macro'

const text = codegen`module.exports = '"sample text"'`

const Bar = () => <strong>{text}</strong>

export default Bar
