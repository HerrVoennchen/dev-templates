import React from "react";
import ReactDOM from "react-dom";
// Search component created as a class
class App extends React.Component {
    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <div>
                <h3>Electron + React + Redux + ...</h3>
                <form>
                    <input type="text" />
                    <button>Senden</button>
                </form>
            </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render(<App />, document.getElementById("content"));
