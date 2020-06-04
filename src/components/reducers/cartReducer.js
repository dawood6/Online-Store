import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Lego', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:"https://cdn.goto.com.pk/uploads/products/2017/1/190x190/image-55749-1.webp"},
        {id:2,title:'WK Wireless Headset', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:55,img:"https://cdn.goto.com.pk/uploads/products/2018/10/190x190/124-5bc77ec00142d.jpg " },
        {id:3,title:'Remax Bluetooth Headset', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:50,img: "https://cdn.goto.com.pk/uploads/products/2018/10/190x190/127-5bc77ec0ae370.jpg "},
        {id:4,title:'Remax Colourful Headphone', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:6,img: "https://cdn.goto.com.pk/uploads/products/2018/10/190x190/rb151-1.jpg"},
        {id:5,title:'Remax 1000 Mm Armor Data Charging Cable', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:7,img: "https://cdn.goto.com.pk/uploads/products/2018/10/190x190/6954851264446-2.jpg "},
        {id:6,title:'Naviforce Watch', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:49,img: "https://cdn.goto.com.pk/uploads/products/2019/4/190x190/5cb730a4e3967.1.jpg "},
        {id:7,title:'Tapal Danedar', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:11,img: "https://cdn.goto.com.pk/uploads/products/2019/10/190x190/5db0006e62c33.tapal-danedar-pouch-950-gm-mistake-correct.webp"},
        {id:8,title:'Driving Force G29 Racing Wheel for PC & PS4', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:500,img: "https://static-01.daraz.pk/original/1c5e1cde5b3f14b0947bb9841e731b5a.jpg"},
        {id:9,title:'USB Plug n Play Controller - Joy Stick - Game Pad for Xbox 360', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: "https://static-01.daraz.pk/original/3d64325ceaa6c42e1af71b9c94cf2e87.jpg"},
        {id:10,title:'n95_3M_9001v orignal with certification', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:16,img: "https://static-01.daraz.pk/p/b52ae82a9aeac3a9b227e5d9b59250ea.jpg"},
        ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
