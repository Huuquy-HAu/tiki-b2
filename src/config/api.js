import axios from './axios'

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function addAuthorization(option){
    const token = getCookie('tiki-user');
    option.headers.Authorization = token;
    return option
}

function refreshToken (){
    
}

export const getAPI = async function (url, option={headers:{}}){
    option = addAuthorization(option);
    return axios.get(url, option)
}

export const postAPI = async function (url, data, option={headers:{}}){
    option = addAuthorization(option);
    return axios.post(url, data ,option)
}

export const patchAPI = async function (url, data, option={headers:{}}){
    option = addAuthorization(option);
    return axios.patch(url, data ,option)
}

export const putAPI = async function (url, data, option={headers:{}}){
    option = addAuthorization(option);
    return axios.put(url, data ,option)
}

export const deleteAPI = async function (url, data, option={headers:{}}){
    option = addAuthorization(option);
    return axios.delete(url, option)
}