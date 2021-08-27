module.exports = `var user = {
    id: {
        chance: 'guid'
    },
    name: {
        faker: 'name.findName'
    },
    email: {
        faker: 'internet.email'
    }
};
var house = {
    id: {
        chance: 'guid'
    },
    address: {
        faker: 'address.streetAddress'
    },
    householder: {
        hasOne: 'users'
    },
    mateIds: {
        hasMany: 'users',
        max: 2,
        min: 2,
        unique: true
    }
};

mocker()
    .schema('users', user, 3)
    .schema('houses', house, 1)
`
