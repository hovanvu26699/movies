export const listMovieFeature = (state) => state.listMovie;
export const detailMovieSelector = (state) => state.detailMovie;

export const getLoadingSelector = (state, actionTypes) => {
  if (Array?.isArray(actionTypes)) {
    return actionTypes.some((r) => {
      const matches = /(.*)_(HANDLER|SUCCESS|FAILURE)/.exec(r);
      if (!matches) {
        return false;
      }
      const [, requestName, requestState] = matches;

      return state.loadingReducer[`${requestName}`] || false;
    });
  }
  return false;
};
