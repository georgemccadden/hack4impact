import React from "react";

// export default function Navbar() {
//   return (
//     <div>
//       <h6>Article Heading</h6>
//       <h6>Video</h6>
//       <h6>Text</h6>
//       <h6>Images</h6>
//     </div>
//   );
// }

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h6>Article Heading</h6>
        <h6>Video</h6>
        <h6>Text</h6>
        <h6>Images</h6>
      </div>
    );
  }
}
