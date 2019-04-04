import axios from 'axios';
const AxiosPlugin = {
    install(Vue) {
        Vue.prototype.$axios = axios.create({
            baseURL: 'http://localhost:8080/',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'X-Requested-With' : 'XMLHttpRequest',
            },
            withCredentials: true,
            crossDomain: true
        });
    }
};

export default (AxiosPlugin);
