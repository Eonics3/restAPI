import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res)=>{
    console.log('POST ROUTE REACHED');
    const user = req.body;
    const userID = uuidv4();

    const userWithID = { ...user, id: userID };
    users.push(userWithID);
    res.send(`User with name: ${user.firstName} ${user.lastName} added to database`);
}

export const getUsers = (req, res) =>{
    res.send(users);
}

export const getUserID = (req, res)=>{
    //{} goes into the object and assigns that value, no {} gives you the json format of the value
    const {id} = req.params;
    const foundUser = users.find((user) => user.id == id );
    
    res.send(foundUser);
}

export const deleteUser = (req, res)=>{
    const {id} = req.params;

    users = users.filter((user)=> user.id != id);

    res.send(`User with id: ${id} has been deleted`);
}

export const patchUser = (req, res)=>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const userToBeUpdated = users.find(user => user.id == id);

    if(firstName){
        userToBeUpdated.firstName = firstName;
    }
    if(lastName){
        userToBeUpdated.lastName = lastName;
    }
    if(age){
        userToBeUpdated.age = age;
    }

    res.send(userToBeUpdated);

}