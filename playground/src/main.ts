import './style.css'

import { test } from "mypackage"

const app = document.querySelector<HTMLDivElement>('#app')!
test()
app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
