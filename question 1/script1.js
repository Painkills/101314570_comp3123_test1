
function lowerCaseWords(array) {
    let hasBeenFiltered = false

    // remove non-strings
    let filteredArray = array.filter((item) => (typeof item === 'string' && item != ""))

    // check if any filtering has been done, and if anything is still in the array after filtering.
    if (filteredArray.length == array.length || filteredArray.length > 0) {
        hasBeenFiltered = true
        
        // If so, go ahead and switch to lowercase.
        filteredArray = filteredArray.map((word) => word.toLowerCase())
    }

    // create promise which resolves if there is something to return in the array after the filtering
    let myPromise = new Promise((res, rej) => {
        if (hasBeenFiltered) {
            res(filteredArray)
        } else {
            rej("Unsuccessful filtering: No words are left after filtering, or no filtering was done.")
        }
    })

    myPromise.then(
        success => console.log(success),
        err => console.log(err)
    )
}
lowerCaseWords(['Pizza', 10, true, 25, false, "AEFQ"])