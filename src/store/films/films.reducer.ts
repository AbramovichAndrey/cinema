import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IFilmProps} from "../../api/films/getFilms"
import { getFilmsThunk } from "./films.actions";


interface FilmState{
    isFilmsLoading: boolean,
    films: IFilmProps[];

    filters: boolean,
 
}

const initialState: FilmState={
    isFilmsLoading:false,
    films:[],

    filters: false,
   
}

const filmSlice = createSlice({
        name: "films",
        initialState,
        reducers:{
            setFilters: (state, action: PayloadAction<boolean>)=>{
                state.filters = action.payload;
            },
       
        },
        extraReducers(builder) {
            builder.addCase(getFilmsThunk.pending,(state)=>{
                state.isFilmsLoading = true;
            })
            builder.addCase(getFilmsThunk.fulfilled,(state,action)=>{
                state.isFilmsLoading=false;
                state.films = action.payload.Search;
            })
        },
})

export const {
    setFilters,
} = filmSlice.actions;

export default filmSlice.reducer