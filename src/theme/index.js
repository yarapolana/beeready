// import React from 'react';
import { darken } from 'polished'

export const theme = {
  color: {
    primary: '#F6DA46',
    secondary: '#F6DA46',
    accent: '#EF805D',
    white: '#FFFFFF',
    black: '#48443B',
    transparent: 'transparent',
    hover: darken(0.05, '#F6DA46'),
  },

  size: {
    small: 24,
    medium: 30,
    big: 54,
    body: 18,
  },
}

// export const icons = {
//   chevronRightIcon: (
//     <MdChevronRight color={theme.color.white} size={theme.size.small} />
//   ),
//   addIcon: (
//     <MdAddCircleOutline color={theme.color.white} size={theme.size.small} />
//   ),
//   deleteIcon: (
//     <MdDeleteForever color={theme.color.white} size={theme.size.small} />
//   ),
//   editIcon: <MdEdit color={theme.color.white} size={theme.size.small} />,
//   cameraIcon: <MdCameraAlt color={theme.color.white} size={theme.size.big} />,
//   addCameraIcon: (
//     <MdAddAPhoto color={theme.color.white} size={theme.size.big} />
//   ),
//   eventIcon: <MdEvent color={theme.color.white} size={theme.size.small - 4} />,
//   placeIcon: <MdPlace color={theme.color.white} size={theme.size.small - 4} />,
// };
