//implementaicon con una funcion de orden superior

export const validateSchema = (schema) => {return (req,res,next)=>{
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        const errorsAlertTexts = error.issues.map(error=>error.message)
        console.log(errorsAlertTexts)
        res.json({errorsAlertTexts})
    }
}
}