// alert('Hello World!');
const a = 12
const b = 23
const c = a + b
document.write(`
        <h2>Arithmetics</h2>
        a = ${a}<br/>
        b = ${b}<br/>
        c = ${c}<br/>
`)
document.write('<h2>For Loops</h2>')
const people = ['Alice', 'Bob', 'Charlie']
document.write('<ul>')
for (let i = 0; i < people.length; i++) {
    document.write(`<li>${people[i]}</li>`)
}
document.write('</ul>')

