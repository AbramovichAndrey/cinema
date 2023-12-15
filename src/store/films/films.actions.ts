import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilms } from "../../api/films/getFilms";

export const getFilmsThunk = createAsyncThunk('films/getFilmsThunk',async () =>{
    return getFilms();
})