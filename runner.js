const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjlhMzc1ZGFjLWNiNTgtNGYzYi1hOTFlLTE5ZDllYjUxMDc5NC0xNzM4NjAxMjY0ODQ2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMWNhYTQ3MmUtMGQyOS00YTg5LTgwMDctY2EyOTk2MGQxN2JjIiwidHlwZSI6InQifQ.Z8aiyeXVZBwh_6w0otcGUjwBPfaVmFKCkSsLDWKb0oc'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
