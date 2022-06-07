function censor() {
    const arr = []

    return function (str1, str2 = '') {
        if (str2) {
            arr.push([str1,str2])
        } else {
            for (let pair of arr) {
                str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
            }

            return str1
        }
    }
}

const changeScene = censor()


changeScene('Python', 'JS')
changeScene('backend', 'frontend')
console.log(changeScene('Python is the most popular programming language for backend web-dev'))
//Должно быть JS is the most popular programming language for frontend web-dev