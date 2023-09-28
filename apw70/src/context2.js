import { createContext } from 'react';


export const SuperContext01 = createContext({users:[{name:'Guest',email:'-',password:'-',balance:0,id:0},{name:'Albert Einstein',email:'albert_einstein@mit.edu',password:'secret123',balance:160,id:1}]});
export const GlobalId01 = createContext({number:0});