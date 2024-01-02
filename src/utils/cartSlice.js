import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
                state.items=state.items.filter((items)=>{
                    if(action.payload.card.info.name==items.card.info.name){
                         
                    }
                    return action.payload.card.info.name!==items.card.info.name}
                    )
                    $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                    
                state.items.push(action.payload);
              }
        
    ,
        removeItem:(state,action)=>{
            console.log('Current State:', state.items);
            $( "div.failure" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            state.items=state.items.filter((items)=>action.payload!==items.card.info.name)
            console.log(action.payload)//gets attribute value passed in removeItem(props)

        },
        clearCart:(state)=>{  
            state.items.length=0;
            $( "div.cleared" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        }
    }
})
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;