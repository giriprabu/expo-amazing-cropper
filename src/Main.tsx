import React, { Component } from 'react';
import CropperPage from './Cropper/Cropper.page';
import { DefaultFooter } from './common';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './constants';

export type ExpoAmazingCropperProps = {
  footerComponent?: JSX.Element;
  onDone: (croppedImageUri: string) => void;
  onError: (err: Error) => void;
  onCancel: () => void;
  imageUri: string;
  imageWidth: number;
  imageHeight: number;
  TOP_VALUE?: number;
  LEFT_VALUE?: number;
  BOTTOM_VALUE?: number;
  RIGHT_VALUE?: number;
  // initialRotation?: number;
  NOT_SELECTED_AREA_OPACITY?: number;
  BORDER_WIDTH?: number;
  COMPONENT_WIDTH?: number;
  COMPONENT_HEIGHT?: number;
  COMPRESS_QUALITY?: number;
  OUTPUT_FORMAT?: 'JPEG'| 'PNG';
} & typeof defaultProps;

const defaultProps = {
  footerComponent: <DefaultFooter doneText='DONE' rotateText='ROTATE' cancelText='CANCEL' />,
  onDone: (_croppedImageUri: string) => {},
  onError: (_err: Error) => {},
  onCancel: () => {},
  imageUri: '',
  imageWidth: 1280,
  imageHeight: 747,
  TOP_VALUE: 0,
  LEFT_VALUE: 0,
  BOTTOM_VALUE: 0,
  RIGHT_VALUE: 0,
  // initialRotation: 0,
  NOT_SELECTED_AREA_OPACITY: 0.5,
  BORDER_WIDTH: 50,
  COMPONENT_WIDTH: SCREEN_WIDTH,
  COMPONENT_HEIGHT: SCREEN_HEIGHT,
  COMPRESS_QUALITY: 1,
  OUTPUT_FORMAT: 'PNG'
};

class Main extends Component<ExpoAmazingCropperProps> {
  static defaultProps = defaultProps;

  render() {
    return (
      <CropperPage
        footerComponent={this.props.footerComponent}
        onDone={this.props.onDone}
        onError={this.props.onError}
        onCancel={this.props.onCancel}
        imageUri={this.props.imageUri}
        imageWidth={this.props.imageWidth}
        imageHeight={this.props.imageHeight}
        TOP_VALUE={this.props.TOP_VALUE}
        LEFT_VALUE={this.props.LEFT_VALUE}
        BOTTOM_VALUE={this.props.BOTTOM_VALUE}
        RIGHT_VALUE={this.props.RIGHT_VALUE}
        // initialRotation={this.props.initialRotation}
        NOT_SELECTED_AREA_OPACITY={this.props.NOT_SELECTED_AREA_OPACITY}
        BORDER_WIDTH={this.props.BORDER_WIDTH}
        COMPONENT_WIDTH={this.props.COMPONENT_WIDTH}
        COMPONENT_HEIGHT={this.props.COMPONENT_HEIGHT}
        COMPRESS_QUALITY={this.props.COMPRESS_QUALITY}
        OUTPUT_FORMAT={this.props.OUTPUT_FORMAT}
      />
    );
  }
}

export default Main;
