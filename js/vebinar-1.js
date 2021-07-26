// ------- objects
// const playlist = {
//     name: 'My playlist',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }
// console.log(playlist);

// 
// const fn = function (myObject) {
//     console.log(myObject);
// }
// fn({ a: 1, b: 2 })

// 
// const rfn = function () {
//     return { a: 5 };
// }
// console.log(rfn());


// 
// const playlist = {
//     name: 'My playlist',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.rating);

// // то же самое
// console.log(playlist['tracks']);
// console.log(playlist['name']);
// console.log(playlist['rating']);


// const propertyName = 'tracks';

// console.log(playlist.propertyName); //будет undefined
// console.log(playlist[propertyName]); //если значение ключа лежит в переменной

// короткая запись свойства

// const username = 'Mango';
// const email = 'mango@gmail.com';

// const signupData = {
//     username,
//     email,
// }
// console.log(signupData);

// ------- вычисляемые свойства

// <input name="color" value="tomato">
// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// }

// console.log(colorPickerData);

// 
// console.log({ a: 1 } === { a: 1 }); //false, потому что это два разных обьекта (так же как и массивы)

// const a = { x: 1, y: 2 }
// const b = a

// console.log(b === a); //true


// ------- Массивы и функции это обьекты

const a = [1, 2, 3]

a.hello = ':)'
console.log(a);


//
const fn = function () {
    console.log('hello');
}
fn.hello = ';)'

console.log(fn.hello);


// 
const playlist = {
    name: 'My playlist',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,

    changeName(newName) {
        console.log('this внутри changeName: ', this);

        this.name = newName
    },

    addTrack(track) {
        this.tracks.push(track)
    },

    updateRating(newRating) {
        this.rating = newRating
    },

    getTrackCount() {
        return this.tracks.length
    }
}
console.log(playlist.getTrackCount());
playlist.changeName('Новое имя')

playlist.addTrack('Новый трек')
console.log(playlist.getTrackCount());

playlist.updateRating(4)

console.log(playlist);


// Перебор обьекта
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
}

let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);
 


const values = Object.values(feedback);
console.log(values);

for (const value of values) {
    console.log(value);

    totalFeedback += value;

}

console.log('totalFeedback: ', totalFeedback);



// ------- Работа с коллекцией (массивом обьектов)

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];
// console.table(friends);

// for (const friend of friends) {
//     console.log(friend.name);

//     friend.newprop = 444;
// }
// console.table(friends);



// --- Ищем друга по имени
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];
// console.table(friends);
 

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     //   console.log(friend);
//     //   console.log(friend.name);

//       if (friend.name === name) {
//           return 'НАШЛИ'
//       }
//     }
//     return 'НЕ НАШЛИ'
// }

// console.log(findFriendByName(friends, 'Poly '));


// --- Получаем имена всех друзей
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];
// console.table(friends);

// const getAllNames = function (allFriends) {
//     const names = []

//     for (const friend of allFriends) {
//         console.log(friend.name);

//         names.push(friend.name)
//     }
//     return names;
// }

// console.log(getAllNames(friends));



// --- Получаем имена только друзей, которые онлайн
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];
console.table(friends);


// онлайн
// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = []

//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);

//         if (friend.online) {
//             onlineFriends.push(friend)
//         }
//     }
//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));


// оффлайн
// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = []

//     for (const friend of allFriends) {
        
//         console.log(friend.online);

//         if (!friend.online) {
//             offlineFriends.push(friend)
//         }
//     }
//     return offlineFriends;
// }

// console.log(getOfflineFriends(friends));


// создать два массива (онлайн и оффлайн)
const getFriendByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    }

    for (const friend of allFriends) {

        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        } 
        
        friendsByStatus.offline.push(friend)
        
    }

    return friendsByStatus;
}


console.log(getFriendByOnlineStatus(friends));


// 
const x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

console.log(Object.keys(x).length);

