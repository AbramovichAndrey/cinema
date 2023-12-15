import axios from "axios";
import {client} from '..';

export interface IFilmProps{
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// export interface IFilmProps {
//   Title: string;
//   Year: number;
//   Rated: string;
//   Released: string;
//   Runtime: string;
//   Genre: string;
//   Director: string;
//   Writer: string;
//   Actors: string;
//   Plot: string;
//   Language: string;
//   Country: string;
//   Awards: string;
//   Poster: string;
//   Rating: [{ Source: string, Value: string }, { Source: string, Value: string }, { Source: string, Value: string }];
//   Metascore: number;
//   imdbRating: number;
//   imdbVotes: number;
//   imdbID: string;
//   Type: string;
//   DVD: string;
//   BoxOffice: string;
//   Production: string;
//   Website: string;
//   Response: boolean;
// }

type GetFilmsSuccessResponse = {Search: IFilmProps[],totalResults: string,Response:string};

export const getFilms = ():Promise<GetFilmsSuccessResponse> =>{
  return client.get("?apikey=c13eca6e&s=all").then((res)=>res.data);
} 
