//Directions:
// MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.

// The React component should return a div element.
// The returned div should render an h1 header within it.
// The h1 header should contain the string Hello React!.



//given code:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line



    // change code above this line
  }
};

//Solution:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
       <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};