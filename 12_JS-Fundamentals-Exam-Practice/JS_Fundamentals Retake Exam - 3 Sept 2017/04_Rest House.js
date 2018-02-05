function restHouse (arrayOfRooms = [], arrayOfGuests = []) {
    //Reading rooms and 
    let rooms = new Map();
    let teaHouse = [];
    for (const room of arrayOfRooms) {
        if (!rooms.has(room.number)) { //if the room does not exist, we add it to the map, we asume only unique room numbers as input
            if (room.type == 'double-bedded') {
                rooms.set(room.number, {roomType: 'double', freeBeds: 2, guestsInRoom: []})
            } else if (room.type == 'triple'){
                rooms.set(room.number, {roomType: 'triple', freeBeds: 3, guestsInRoom: []})
            }
        }
    }
    //rooms;
    for (const couple of arrayOfGuests) {
        let firstPerson = couple.first;
        let secondPerson = couple.second;
        //If the couple is a male and a female, they must be accommodated in the first free double room
        if (firstPerson.gender != secondPerson.gender) { 
            for (const [roomName, room] of rooms) {
                if (room.roomType == 'double' && room.freeBeds == 2) {
                    room.guestsInRoom.push(firstPerson);
                    room.guestsInRoom.push(secondPerson);
                    room.freeBeds -= 2;
                    break;
                }
            }
        //If the couple is of two people of the same gender, they should be accommodated in a triple room
        } else if (firstPerson.gender == secondPerson.gender) { 
            for (const [roomName, room] of rooms) {
                if (room.roomType == 'triple' && room.guestsInRoom.length == 1 && room.guestsInRoom[0].gender == firstPerson.gender) {
                    room.guestsInRoom.push(firstPerson);
                    room.guestsInRoom.push(secondPerson);
                    room.freeBeds -= 2;
                    break;
                } else if (room.roomType == 'triple' && room.guestsInRoom.length == 2 && room.guestsInRoom[1].gender == firstPerson.gender) {
                    room.guestsInRoom.push(firstPerson);
                    room.freeBeds -= 1;
                    for (const [roomName, room] of rooms) {
                        if (room.roomType == 'triple' && room.guestsInRoom.length == 0) {
                            room.guestsInRoom.push(secondPerson);
                            room.freeBeds -= 1;
                            break;
                        } else if (room.roomType == 'triple' && room.guestsInRoom.length == 1 && room.guestsInRoom[0].gender == secondPerson.gender) {
                            room.guestsInRoom.push(secondPerson);
                            room.freeBeds -= 1;
                            break;
                        } else if (room.roomType == 'triple' && room.guestsInRoom.length == 2 && room.guestsInRoom[1].gender == secondPerson.gender) {
                            room.guestsInRoom.push(secondPerson);
                            room.freeBeds -= 1;
                            break;
                        } else {
                            teaHouse.push(secondPerson);
                            break;
                        }
                    }
                } else if (room.roomType == 'triple' && room.guestsInRoom.length == 0) {
                    room.guestsInRoom.push(firstPerson);
                    room.guestsInRoom.push(secondPerson);
                    room.freeBeds -= 2;
                    break;
                }
            }
        }
    }
    //rooms;

    //SORTING
    rooms = new Map([...rooms].sort((a, b) => {
        let roomNumberA = a[0];
        let roomNumberB = b[0];
        //Sort the rooms by room number in ascending alphanumeric order
        return roomNumberA.localeCompare(roomNumberB);
    }));
    //Sort the guests in each room by their name, in ascending alphabetical order
    
    //PRINTING
    for (const [roomNumber, room] of rooms) {
        console.log(`Room number: ${roomNumber}`);
        // SORT HERE
        let sortedGuests = room.guestsInRoom.sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;
            return nameA.localeCompare(nameB);
        });
        for (const guest of sortedGuests) {
            console.log(`--Guest Name: ${guest.name}`);
            console.log(`--Guest Age: ${guest.age}`);
        }
        console.log(`Empty beds in the room: ${room.freeBeds}`);
    }
    console.log(`Guests moved to the tea house: ${teaHouse.length}`);
}

// restHouse([ { number: '206', type: 'double-bedded' },
// { number: '311', type: 'triple' } ],
// [ { first: { name: 'Tanya Popova', gender: 'female', age: 24 }, 
//   second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 } },
// { first: { name: 'Katerina Stefanova', gender: 'female', age: 23 }, 
//   second: { name: 'Angel Nachev', gender: 'male', age: 22 } },
// { first: { name: 'Tatyana Germanova', gender: 'female', age: 23 }, 
//   second: { name: 'Boryana Baeva', gender: 'female', age: 22 } } ]
// )

restHouse([ { number: '101A', type: 'double-bedded' },
{ number: '104', type: 'triple' },
{ number: '101B', type: 'double-bedded' },
{ number: '102', type: 'triple' } ],
[ { first: { name: 'Sushi & Chicken', gender: 'female', age: 15 }, 
  second: { name: 'Salisa Debelisa', gender: 'female', age: 25 } },
{ first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 }, 
  second: { name: 'Jeko Snejev', gender: 'male', age: 18 } },
{ first: { name: 'Pesho Goshov', gender: 'male', age: 20 }, 
  second: { name: 'Gosho Peshov', gender: 'male', age: 18 } },    
{ first: { name: 'Conor McGregor', gender: 'male', age: 29 }, 
  second: { name: 'Floyd Mayweather', gender: 'male', age: 40 } } ]
)