import { takeLatest } from 'redux-saga/effects';

import getBooks from './BookSagas';

function *index() {

    console.log('entrada no index')
    
    const abc =  yield takeLatest('LOAD_DATA_REQUEST', getBooks)
    //console.log('abc:', abc )
}

export default index;