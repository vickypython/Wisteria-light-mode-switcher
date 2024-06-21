// import axios from "axios"


// //type action component
//  const ADD_TODO='ADD_TODO'
//  const REMOVE_TODO='REMOVE_TODO'
//  //reducer components
//  const reducer=(state,action)=>{
// //state is the initial state of the application
// //action received fromthe dispatch function
// switch (action.type) {
//     case ADD_TODO:
//         return [...state,action.payload]
//         case REMOVE_TODO:
//            const removeItem= state.filter(post=>post.name !==action.payload)
// return removeItem
//     default:
//         return state
// }

//  }
//  //i need context to be able to use the reducer in mutiple comps
//  const ThemeContext=createContext()

//  const App=()=>{
//     const [state, dispatch] = useReducer(reducer,[])
//     return(
//         <ThemeContext.Provider value={[state,dispatch]}>
// <Todo/>
// <Todos/>

//         </ThemeContext.Provider>
//     )
//  }
//  const Todo=()=>{
//     const {dispatch}=useContext(ThemeContext)
//     const handlesub=()=>{
// dispatch({
// type:ADD_TODO,
// payload:

// })
//     }
//     return(
//         <form action="">
//             <input type="text" name="" id="" />
//         </form>
//     )
//  }
 
// //  payload is the dynamic data send 
// //when updating,deleting any stuff you should have something uniquily identufy it like any id to check if 
// // they mathc if they do to the opee
//  const value=async()=>{
//     try {
//         const response= await axios.get('hhttp/Todos?Id=2333',{
// method:'p'
//         })
//         const result=response.json()  
//         return result
//     } catch (error) {
//       console.error(error.message);  
//     }
//  }
//  axios.post('/user',{
//     firstName:'victor',
//     firstName:'kyalo',
//     headers:{
// 'cont'
//     }
//  }).then(result=>{
//     return result.
//  })
//  .catch()
//  {

//  }