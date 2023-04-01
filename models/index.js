// const { v4 } = require('uuid');
import { v4 } from "uuid";
// sample data

let users = {
    1: {
      id: v4(),
      username: 'Robin Wieruch',
    },
    2: {
      id: v4(),
      username: 'Dave Davids',
    },
};
  
let messages = {
    1: {
      id: v4(),
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: v4(),
      text: 'By World',
      userId: '2',
    },
};


export {
    users,
    messages
};