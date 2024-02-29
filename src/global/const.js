const URL_BASE = 'https://food-server-beryl.vercel.app/api/';
// const URL_BASE = 'http://localhost:8082/api/';
const URL= `${URL_BASE}food`;
const URL_LOGIN= `${URL_BASE}login`;
const URL_LOGOUT=`${URL_BASE}logout`;
const URL_ADMINISTRATOR= `${URL_BASE}administrator`;

module.exports  = {
    URL,
    URL_LOGIN,
    URL_LOGOUT,
    URL_ADMINISTRATOR
};