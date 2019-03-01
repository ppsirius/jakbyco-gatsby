const initialState = {
  imageAnimationCompleted: false,
};

const IMAGE_ANIMATION_COMPLETED = 'IMAGE_ANIMATION_COMPLETED';
export const imageAnimationCompleted = () => ({ type: IMAGE_ANIMATION_COMPLETED });

export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_ANIMATION_COMPLETED:
      return Object.assign({}, state, {
        imageAnimationCompleted: true
      })
    default:
      return state;
  }
};