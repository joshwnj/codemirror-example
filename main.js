import './main.css'

const CodeMirror = require('codemirror')
require('codemirror/mode/gfm/gfm')

const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
  mode:  "gfm"
});
