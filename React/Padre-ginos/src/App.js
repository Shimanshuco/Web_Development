const Pizza = (props) =>{
    return React.createElement("div" , {} , [
        React.createElement("h1", {} , props.name),
        React.createElement("p", {}, props.description),
        React.createElement("p", {}, "Price: $" + props.price),
        React.createElement("button", {}, "Order Now"),
    ]);
}
const App = () =>{
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Pixel Perfect Pizzas"),
        React.createElement(Pizza, {
            name: "The Pepperoni Pizza",
            description: "A delicious pizza with pepperoni, cheese, and tomato sauce.",
            price: 12.99
        }),
        React.createElement(Pizza, {
            name: "The Margherita Pizza",
            description: "A classic pizza with fresh mozzarella, tomatoes, and basil.",
            price: 11.99
        })
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));