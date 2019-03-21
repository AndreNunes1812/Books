import { put } from 'redux-saga/effects'
import axios from 'axios'
import { loadDataSuccess } from '../actions';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

function *getBooks(search) {

   // console.log('GetBoooooook')

   // console.log('query:', search)
    try {
        const dados = yield axios.get(`${BASE_URL}${search.inputQuery}&maxResults=${search.maxResults}`);

        newDados = dados.data.items.map((item , index)=> {
       
            return {
                subtitle: item.volumeInfo.subtitle,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors !== undefined ? item.volumeInfo.authors[0] : null, 
                pageCount: item.volumeInfo.pageCount,
                averageRating: item.volumeInfo.averageRating,
                amount: item.saleInfo.listPrice === undefined ? null : item.saleInfo.listPrice.amount,
                description: item.volumeInfo.description,
                imageLinks: item.volumeInfo.imageLinks !== undefined ? item.volumeInfo.imageLinks.smallThumbnail : null,
                id: index
            }
        })
     
        yield put(loadDataSuccess( newDados , dados.data.totalItems));

     //   console.log('dados no saga:',dados)

    } catch (e) {
        console.log('Erro,:',e)
    }
   
}

export default getBooks;