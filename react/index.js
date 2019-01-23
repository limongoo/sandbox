function App () {
    return React.createElement(
        'h1',
        {className: "title",
        onClick: () => {
            alert("wow");
        }},
        React.createElement(Heading, { text: 'Hello World' })
    )
}


function Heading (props) {
    return React.createElement(
        'h2',
        null,
        props.text,
    )
}

ReactDOM.render(React.createElement(App), root);