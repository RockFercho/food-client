import axios from 'axios';

axios.interceptors.request.use(
    (req) => {
        if (req.url.includes('/api/administrator') && localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            req.params = { token: token };
        }
        return req;
    },
    (err) => {
        if (err.response.data.message.include('TokenExpiredError')) {
            localStorage.removeItem('token');
            localStorage.removeItem('startTime');
            window.location = '/ui/login';
        }
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (res) => {
        if (res.status === 200 && res.config.url.includes('/api/login')) {
            localStorage.setItem('token', res.data);
            window.location = '/ui/inicio';
        }
        if (res.status === 200 && res.config.url.includes('/api/logout')) {
            localStorage.removeItem('token');
            localStorage.removeItem('startTime');
            window.location = '/ui/login';
        }
        return res;
    },
    (err) => {
        if (err.response.data.message.includes('TokenExpiredError')) {
            localStorage.removeItem('token');
            localStorage.removeItem('startTime');
            window.location = '/ui/login';
        }
        return Promise.reject(err);
    }
);