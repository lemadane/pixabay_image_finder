import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../image-results/ImageResults';
import { useSelector, useDispatch } from 'react-redux';
import { AMOUNT_CHANGE, SEARCH_TEXT_CHANGE, getImages } from '../../reducer';
import { FlatButton } from 'material-ui';

const Search = () => {
  const state = useSelector(state => state);
  const { amount, searchText, images } =state;
  console.log('hello:', state);
  const dispatch = useDispatch();
  //   const onTextChange = e => {
  //     const val = e.target.value;
  //     this.setState({ [e.target.name]: val }, () => {
  //       if (val === '') {
  //         this.setState({ images: [] });
  //       } else {
  //         axios
  //           .get(
  //             `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
  //           )
  //           .then(res => this.setState({ images: res.data.hits }))
  //           .catch(err => console.log(err));
  //       }
  //     });
  //   };

  // const onAmountChange = (e, index, value) => this.setState({ amount: value });
  return (
    <div>
      <TextField
        name="searchText"
        value={searchText}
        onChange={(e) => {
          // @ts-ignore
          dispatch({ type: SEARCH_TEXT_CHANGE, payload: e.target.value });
        }}
        floatingLabelText="Search For Images"
        fullWidth={true}
      />
      <br />  
      <SelectField
        name="amount"
        floatingLabelText="Amount"
        value={amount}
        // @ts-ignore
        onChange={(e, index, value) => dispatch({ type: AMOUNT_CHANGE, payload: value })}
      >
        <MenuItem value={5} primaryText="5" />
        <MenuItem value={10} primaryText="10" />
        <MenuItem value={15} primaryText="15" />
        <MenuItem value={30} primaryText="30" />
        <MenuItem value={50} primaryText="50" />
      </SelectField>
      <br />
      <FlatButton onClick={() => dispatch(getImages(state)) } >GET IMAGES</FlatButton>
      <br />
      { (images && images.length) ? (
        <ImageResults images={images} />
      ) : null}
      
    </div>
  );
}

export default Search;  
