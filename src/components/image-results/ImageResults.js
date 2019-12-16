import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { useSelector, useDispatch } from 'react-redux';
import { ZOOM_IN_CLOSE, ZOOM_IN_OPEN } from '../../reducer';

const ImageResults = () => {
  const state = useSelector(state => state);
  const { images, openZoomIn, currentImage } = state;
  const dispatch = useDispatch();

  let imageListContent;
  if (images && images.length) {
    imageListContent = (
      <GridList cols={3}>
        {
          images.map((image) => (
            <GridTile
              title={image.tags}
              key={image.id}
              subtitle={
                <span>
                  by <strong>{image.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => dispatch({ type: ZOOM_IN_OPEN, payload: image.largeImageURL })}>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={image.largeImageURL} alt="" />
            </GridTile>
          ))}
      </GridList>
    );
  } else {
    imageListContent = null;
  }

  const actions = [
    <FlatButton label="Close" primary={true} onClick={() => dispatch({ type: ZOOM_IN_CLOSE })} />
  ];

  return (
    <div>
      {imageListContent}
      <Dialog
        actions={actions}
        modal={false}
        open={openZoomIn}
        onRequestClose={() => dispatch({ type: ZOOM_IN_CLOSE })}
      >
        <img src={currentImage} alt="" style={{ width: '100%' }} />
      </Dialog>
    </div>
  );
}


ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
