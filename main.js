//------------------------------state

const data = {
    "data": [
        "affenpinscher", "whippet", "african", "irish wolfhound", "pembroke", "airedale", "NEWFOUNDLAND", "OTTERHOUND", "PAPILLON", "PEKINESE",
        "SWISS MOUNTAIN", "weimaraner", "MINIATURE PINSCHER", "akita", "GERMAN POINTER", "vizsla", "POMERANIAN", "appenzeller",
        "MINIATURE POODLE", "yorkshire terrier", "STANDARD POODLE", "basenji", "BERNESE MOUNTAIN", "wheaten terrier", "TOY POODLE",
        "beagle", "MEXICANHAIRLESS", "westhighland terrier", "PUG", "bluetick", "TIBETAN MASTIFF", "toy terrier",
        "PYRENEES", "borzoi", "BULL MASTIFF", "tibetan terrier", "REDBONE", "bouvier", "MALTESE", "silky terrier",
        "CHESAPEAKE RETRIEVER", "boxer", "MALINOIS", "sealyham terrier", "CURLY RETRIEVER", "brabancon", "MALAMUTE",
        "scottish terrier", "FLATCOATED RETRIEVER", "briard", "LHASA", "patterdale terrier", "GOLDEN RETRIEVER", "boston bulldog",
        "LEONBERG", "norwich terrier", "RHODESIAN RIDGEBACK", "french bulldog", "LABRADOR", "norfolk terrier", "ROTTWEILER",
        "staffordshire bullterrier", "KUVASZ", "lakeland terrier", "SALUKI", "cairn", "KOMONDOR", "kerryblue terrier", "SAMOYED",
        "chihuahua", "KELPIE", "irish terrier", "SCHIPPERKE", "chow", "KEESHOND", "fox terrier", "GIANT SCHNAUZER",
        "clumber", "HUSKY", "dandie terrier", "MINIATURE SCHNAUZER", "border collie", "WALKER HOUND", "border terrier", "ENGLISH SETTER",
        "coonhound", "ENGLISH HOUND", "bedlington terrier", "GORDON SETTER", "cardigan corgi", "BLOOD HOUND", "australian terrier",
        "IRISH SETTER", "dachshund", "BASSET HOUND", "american terrier", "ENGLISH SHEEPDOG", "great dane", "AFGHAN HOUND",
        "stbernard", "SHETLAND SHEEPDOG", "scottish deerhound", "IBIZAN HOUND", "english springer", "SHIBA", "dhole",
        "GROENENDAEL", "welsh spaniel", "SHIHTZU", "dingo", "ITALIAN GREYHOUND", "sussex spaniel", "BLENHEIM SPANIEL",
        "doberman", "GERMANSHEPHERD", "japanese spaniel", "BRITTANY SPANIEL", "norwegian elkhound", "ESKIMO", "irish spaniel",
        "COCKER SPANIEL", "entlebucher", "ENTLEBUCHER", "cocker spaniel", "IRISH SPANIEL", "eskimo", "NORWEGIAN ELKHOUND",
        "brittany spaniel", "JAPANESE SPANIEL", "germanshepherd", "DOBERMAN", "blenheim spaniel", "SUSSEX SPANIEL", "italian greyhound",
        "DINGO", "shihtzu", "WELSH SPANIEL", "groenendael", "DHOLE", "shiba", "ENGLISH SPRINGER", "Ibizan hound",
        "SCOTTISH DEERHOUND", "shetland sheepdog", "STBERNARD", "afghan hound", "GREAT DANE", "english sheepdog", "AMERICAN TERRIER",
        "basset hound", "DACHSHUND", "irish setter", "AUSTRALIAN TERRIER", "blood hound", "CARDIGAN CORGI", "gordon setter",
        "BEDLINGTON TERRIER", "english hound", "COONHOUND", "english setter", "BORDER TERRIER", "walker hound", "BORDER COLLIE",
        "miniature schnauzer", "DANDIE TERRIER", "husky", "CLUMBER", "giant schnauzer", "FOX TERRIER", "keeshond", "CHOW",
        "schipperke", "IRISH TERRIER", "kelpie", "CHIHUAHUA", "samoyed", "KERRYBLUE TERRIER", "komondor", "CAIRN",
        "saluki", "LAKELAND TERRIER", "kuvasz", "STAFFORDSHIRE BULLTERRIER", "rottweiler", "NORFOLK TERRIER", "labrador",
        "FRENCH BULLDOG", "rhodesian ridgeback", "NORWICH TERRIER", "leonberg", "BOSTON BULLDOG", "golden retriever", "PATTERDALE TERRIER",
        "lhasa", "BRIARD", "flatcoated retriever", "SCOTTISH TERRIER", "malamute", "BRABANCON", "curly retriever", "SEALYHAM TERRIER",
        "malinois", "BOXER", "chesapeake retriever", "SILKY TERRIER", "maltese", "BOUVIER", "redbone", "TIBETAN TERRIER",
        "bull mastiff", "BORZOI", "pyrenees", "TOY TERRIER", "tibetan mastiff", "BLUETICK", "pug", "WESTHIGHLAND TERRIER",
        "mexicanhairless", "BEAGLE", "toy poodle", "WHEATEN TERRIER", "bernese mountain", "BASENJI", "standard poodle",
        "YORKSHIRE TERRIER", "miniature poodle", "APPENZELLER", "pomeranian", "VIZSLA", "german pointer", "AKITA",
        "miniature pinscher", "WEIMARANER", "swiss mountain", "AIREDALE", "pekinese", "WHIPPET", "papillon", "AFRICAN",
        "otterhound", "IRISH WOLFHOUND", "newfoundland", "PEMBROKE", "AFFENPINSCHER"
    ]
}

//---------------------API

let newData = null;


  axios.get('http://www.mrsoft.by/data.json').then(res => {
    data = res.data; // Результат ответа от сервера
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
    newData = data.data.filter(item => item.length > localNumber);
    outputData.innerHTML = newData.join(", ");
}

//---------------------по подстроке с учетом/без учета регистра

const buttonString = () => {

    let localState = inputText.value;
    if (chekText.checked === true) {
        newData = data.data.filter(item => item.indexOf(localState) !== -1);
    }
    if (chekText.checked === false) {
        let lowerData = data.data.map(item => item.toLowerCase());
        let newLocalState = localState.toLowerCase();
        newData = lowerData.filter(item => item.indexOf(newLocalState) !== -1);

    }
    outputData.innerHTML = newData.join(", ")
}
