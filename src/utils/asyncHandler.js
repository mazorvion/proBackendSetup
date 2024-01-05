
const asyncHandler = (fn) => async(req, res, next) => {
    try{
        await fn(req, res, next)

    }catch(error){
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}


export {asyncHandler}
// a wrapper function so that i won't need to repeat try catch in every routes

// ********************** WAY 2 *************

// const asyncHandler = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }


