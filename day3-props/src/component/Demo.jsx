import MyComponent from "./MyComponent"

function Demo (props) {
    console.log(props.data)
    return (
        <div>
            <h1>Hii I am a demo component</h1>
            <h1>{props.data}</h1>
            <MyComponent/>
        </div>
    )
}

export default Demo