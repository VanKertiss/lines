//------------------------------state

let dataWords = {
    
}

//---------------------API 

let newData = null;




 fetch(`https://api.allorigins.win/raw?url=http://www.mrsoft.by/data.json`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => {
                        dataWords = data;
                        console.log(dataWords)
                    });
    

//--------------------переменные

const inputText = document.querySelector('.inputText');
const chekText = document.querySelector('#chekText');
const buttonLegth = document.querySelector('.buttonLegth');
const outputData = document.querySelector('.outputData');

//-------------------- по длинне
const buttonLength = () => {
    let localState = inputText.value;
    let localNumber = parseInt(localState);
    newData = dataWords.data.filter(item => item.length > localNumber);
    outputData.innerHTML = newData.join(", ");
}

//---------------------по подстроке с учетом/без учета регистра

const buttonString = () => {

    let localState = inputText.value;
    if (chekText.checked === true) {
        newData = dataWords.data.filter(item => item.indexOf(localState) !== -1);
    }
    if (chekText.checked === false) {
        let lowerData = dataWords.data.map(item => item.toLowerCase());
        let newLocalState = localState.toLowerCase();
        newData = lowerData.filter(item => item.indexOf(newLocalState) !== -1);

    }
    outputData.innerHTML = newData.join(", ")
}
