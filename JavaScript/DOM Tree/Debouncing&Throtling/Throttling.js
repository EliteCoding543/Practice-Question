let onClick = true

function handleClick(){
    if(!onClick) return;

    console.log("Button Clickedd")
    onClick = false;

    setTimeout(() => { onClick = true }, 200)
}

handleClick()
handleClick()
handleClick()