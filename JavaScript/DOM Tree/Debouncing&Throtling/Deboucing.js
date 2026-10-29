let timer;
function debounce(value){
    clearTimeout(timer)

    timer = setTimeout(() => {
        console.log("Api Call", value)
    }, 200);
}

debounce("a")
debounce("ab")
debounce("abc")
