import {useState} from "react";

const Latter = () => {
    const [word, setWord] = useState("")
    const [result, setResult] = useState("")


    const handleInput = (event) => {
        setWord(event.target.value)
    }

    const isVowel = (letter) => {
        return ["a", "e", "i", "o", "u"].includes(letter.toLowerCase())
    }

    const handleClickOld = () => {
        if (!word) {
            setResult("Enter a word")
        } else {
            let lastLetter
            let firstRepeatingLetter
            word.split("").forEach(letter => {
                if (lastLetter) {
                    if (letter === lastLetter) {
                        firstRepeatingLetter = letter
                    }
                }
                lastLetter = letter
            })
            setResult(firstRepeatingLetter)
        }
    }

    const handleClick2 = () => {
        if (!word) {
            setResult("Enter a word")
        } else {
            let allVowels = word.split("").filter(letter => {
                return isVowel(letter)
            })
            setResult(allVowels.toString())
        }
    }

    // const  handleClick = () => {
    //     if (!word) {
    //         setResult("Enter a word")
    //     } else {
    //         let allVowels = ""
    //         word.split("").forEach(letter => {
    //             if (isVowel(letter)){
    //                 allVowels = allVowels + letter
    //             }
    //         })
    //         setResult(allVowels)
    //     }
    // }

    return (
        <div>
            <label>Insert a word</label>
            <input value={word} type="text" onChange={handleInput}/>
            <button onClick={handleClick2} type="submit">submit</button>
            <p>{result || "No vowels"}</p>
        </div>
    )

}

export default Latter