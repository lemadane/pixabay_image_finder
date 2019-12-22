import React from 'react';
import { TextField, Select, MenuItem } from '@material-ui/core';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import ImageResults from '../image-results/ImageResults';
import { useSelector, useDispatch } from 'react-redux';
import { AMOUNT_CHANGE, SEARCH_TEXT_CHANGE } from '../reducer';
import { FlatButton } from 'material-ui';
import { MyState } from '../types';

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
        name='amount'
        value={ amount }
        onSelect={ (e) => dispatch({ type: AMOUNT_CHANGE, payload: e.target.value }) }>
        <MenuItem value={ 5 } />
        <MenuItem value={ 10 } />
        <MenuItem value={ 15 } />
        <MenuItem value={ 30 } />
        <MenuItem value={ 50 } />
      </Select>
      <br />
      <FlatButton onClick={ () => dispatch(getImages(state)) } >GET IMAGES</FlatButton>
      <br />
      { (images && images.length) ? (
        <ImageResults images={ images } />
      ) : null }

    </div>
  );
};