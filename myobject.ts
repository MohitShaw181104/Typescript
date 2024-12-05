type User= {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}

let myuser: User ={
    _id: "1234",
    name : "h",
    email: "m&m@gmail.com",
    isActive: false,
    creditcardDetails: 123
}