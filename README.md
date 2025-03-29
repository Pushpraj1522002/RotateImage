# Approach First

First I tried to rotate each image 

### Code:
```Javascript
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
    return (
      <div className="App">
        <div className="inputTag">
          Enter the angle: <input type="text" name="angle" id="angle" />
          <button className="button" onClick={this.rotateImage}>
            Rotate
          </button>

        </div>
        <div className="container">
          <div className="row">
            <div className="column">
              <img
                src="https://i.postimg.cc/FfpJBC0y/image-part-001.jpg"
                alt="Part1"
                style={{ transform: `rotate(${this.state.angle}deg)` }}
              />
            </div>
            <div className="column">
              <img
                src="https://i.postimg.cc/QVwKwTKy/image-part-002.jpg"
                alt="Part2"
                style={{ transform: `rotate(${this.state.angle}deg)` }}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <img
                src="https://i.postimg.cc/njw9HsRM/image-part-003.jpg"
                alt="Part3"
                style={{ transform: `rotate(${this.state.angle}deg)` }}
              />
            </div>
            <div className="column">
              <img
                src="https://i.postimg.cc/4nmhW5yc/image-part-004.jpg"
                alt="Part4"
                style={{ transform: `rotate(${this.state.angle}deg)` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
```

### Output Image

![Image1](image1.png)


# Approach Second, Correct Results

- first I add all the images in a .image-container div.
- The apply `transform: rotation(angle)` in the style section of `.image-container` div.
- it will ensure all the four quadrants will rotate as a single unit.


### Code
```javascript
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="image-container"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              transform: `rotate(${this.state.angle}deg)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <img
              src="https://i.postimg.cc/FfpJBC0y/image-part-001.jpg"
              alt="Part1"
              style={{ width: "200px", height: "200px" }}
            />
            <img
              src="https://i.postimg.cc/QVwKwTKy/image-part-002.jpg"
              alt="Part2"
              style={{ width: "200px", height: "200px" }}
            />
            <img
              src="https://i.postimg.cc/njw9HsRM/image-part-003.jpg"
              alt="Part3"
              style={{ width: "200px", height: "200px" }}
            />
            <img
              src="https://i.postimg.cc/4nmhW5yc/image-part-004.jpg"
              alt="Part4"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

```

### Output Image :

![image2](image2.png)

