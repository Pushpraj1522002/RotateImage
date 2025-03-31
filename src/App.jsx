
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
  }

  rotateImage = () => {
    const angle = document.getElementById("angle").value;
    this.setState({ angle: parseInt(angle, 10) || 0 });
  };

  render() {
    const rad = (Math.PI / 180) * this.state.angle;
    const cosA = Math.cos(rad);
    const sinA = Math.sin(rad); // Center coordinates
    const centerX = 100;
    const centerY = 100;
    const halfSize = 50;

    const initialPositions = [
      { x: -halfSize, y: -halfSize }, // Top-left
      { x: halfSize, y: -halfSize }, // Top-right
      { x: -halfSize, y: halfSize }, // Bottom-left
      { x: halfSize, y: halfSize }, // Bottom-right
    ];

    const positions = initialPositions.map(({ x, y }) => ({
      left: centerX + x * cosA - y * sinA,
      top: centerY + x * sinA + y * cosA,
    }));

    return (
      <div className="App">
        <div className="inputTag">
          Enter the angle: <input type="text" name="angle" id="angle" />
          <button className="button" onClick={this.rotateImage}>
            Rotate
          </button>
        </div>

        <div
          className="container"
          style={{ position: "relative", width: "200px", height: "200px" }}
        >
          {[
            "FfpJBC0y/image-part-001.jpg",
            "QVwKwTKy/image-part-002.jpg",
            "njw9HsRM/image-part-003.jpg",
            "4nmhW5yc/image-part-004.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={`https://i.postimg.cc/${src}`}
              alt={`Part${index + 1}`}
              style={{
                position: "absolute",
                left: `${positions[index].left}px`,
                top: `${positions[index].top}px`,
                transform: `rotate(${this.state.angle}deg)`,
                width: "100px",
                height: "100px",
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
