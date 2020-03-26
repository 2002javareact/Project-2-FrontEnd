
const devEnvironment = {
    projectBaseUrl:'http://localhost:2525'
}

const prodEnvironment = {
    projectBaseUrl:'http://'
}

export let environment = prodEnvironment

if(process.env.REACT_APP_ENV === 'production'){
    environment = prodEnvironment
}