function renderHouse() {
    const apartment = {
        rooms: 3,
        bathrooms: 2,
        sqft: 1500
    }

    const house = {
        rooms: 5,
        bathrooms: 3,
        sqft: 2500
    }

    const roomElement = document.getElementById('room')
    const bathElement = document.getElementById('baths')
    const sqftElement = document.getElementById('sqft')

    document.write(`
        Rooms: ${house.rooms}<br/>
        Bathrooms: ${house.bathrooms}<br/>
        SQFT: ${house.sqft}<br/>
`)

    roomElement.innerText = house.rooms
    roomElement.innerText = house.bathrooms
    roomElement.innerText = house.sqft
}

function renderStudentsModern(students) {
    const studentsElement = document.getElementById('students')
    let lineitems = students.map(student => `<li>student.name</li>`).join('')
    studentsElement.innerHTML = lineitems
}

renderHouse()
renderStudentsModern([
    {name: 'Alice'},
    {name: 'Bob'},
    {name: 'Charlie'},
    {name: 'Dan'},
    {name: 'Edward'}
])


