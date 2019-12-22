import React from 'react';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AMOUNT_CHANGE, SEARCH_TEXT_CHANGE } from '../reducer';
import { MyState } from '../types';
import { getImages } from '../getImages';

export const Search = () => {
  const { searchText, amount } = useSelector((state: MyState) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <TextField
        name='searchText'
        value={ searchText }
        onChange={ (e) => {
          dispatch({ type: SEARCH_TEXT_CHANGE, payload: e.target.value });
        } }
        label='Search For Images'
        fullWidth={ true }
      />
      <br />
      <Select
        fullWidth={true}
        name='amount'
        value={ amount }
        onChange={ (e) => dispatch({ type: AMOUNT_CHANGE, payload: e.target.value  }) }>
        <MenuItem value={ 5 }>5</MenuItem> />
        <MenuItem value={ 10 }>10</MenuItem> />
        <MenuItem value={ 15 }>15</MenuItem> />
        <MenuItem value={ 30 }>30</MenuItem> />
        <MenuItem value={ 50 }>50</MenuItem> />
      </Select>
      <br />
      <Button onClick={ () => dispatch(getImages({ searchText, amount })) }>Get Image</Button>
      <br />
      { //(images && images.length) ? (
        //   <ImageResults images={ images } />
        // ) : null }
      }
    </div>
  );
};