import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner-styles";

// This takes in a component and returns the same component or a spinner
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
