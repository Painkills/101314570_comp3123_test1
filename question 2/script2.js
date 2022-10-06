const resolvedPromise = () => {
    let isResolvable = true
    let myPromise
    
    myResolvedPromise = new Promise((res, rej) => {
        if (isResolvable) {
            setTimeout(() => {
                res({message: 'delayed success'})
            }, 500)
            
        } else {
            rej({error: 'bad things happened'})
        }
    })

    myResolvedPromise.then(
        success => console.log(success),
        err => console.log(err)
    )
}

const rejectedPromise = () => {
    let isResolvable = false
    let myRejectedPromise
    
    myRejectedPromise = new Promise((res, rej) => {
        if (isResolvable) {
            setTimeout(() => {
                res({message: 'delayed success!'})
            }, 500)
            
        } else {
            setTimeout(() => {
                rej({error: 'delayed exception!'})
            }, 500)
            
        }
    })

    myRejectedPromise.then(success => console.log(success)).catch(err => console.log(err))
}

resolvedPromise()
rejectedPromise()