const regEx:any = {
    "REQUIRED":{
        pattern:/./,
        message:'Required !!!'
    },
    "EMAIL":{
        pattern:/^[a-zA-Z]{1}[a-zA-Z0-9._/]*@[a-zA-z]{3,10}\.[a-zA-Z]{2,3}$/,
        message:"Should be in the email format"
    },
    "MIN5CHAR":{
        pattern:/[a-zA-Z0-9@_.]{5,}/,
        message:"Minimum 5 characters required"
    },
    "PHONENUMBER":{
        pattern:/^[0-9]{10}$/,
        message:"Exactly 10 digits required"
    }
}

function validate(inputObj:any){
    inputObj.errorMsg = ""
    for(let val of inputObj?.criteria){
        const{pattern,message} = regEx[val]
        if(!pattern.test(inputObj?.value)){
            inputObj.errorMsg = message
            break
        }
    }
}
export function handleFieldLevelValidation(event:any,inputControls:any,setinputControls:any){
    const{name,value} = event?.target
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
    let inputObj :any = clonedInputControls.find((obj :any)=>obj.name === name)
    inputObj.value = value
    validate(inputObj)
    // console.log(inputControls)
    setinputControls(clonedInputControls)
}

export function handleFormLevelValidation(inputControls:any,setInputControls:any){
    const dataObj : any = {}
        const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
        clonedInputControls.forEach((obj :any) =>{                 //check each input field have data or not
            dataObj[obj.name] = obj.value
            validate(obj)                           //if data is there then update hasError is false otherwise true
        })
        setInputControls(clonedInputControls)
        const isInValid = clonedInputControls.some((obj:any)=> obj.errorMsg) //If any of the input object with hasError is true then it is invalid
    return[isInValid,dataObj]
}