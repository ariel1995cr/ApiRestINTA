import Axios from "axios";

const urlBase = process.env.MIX_AXIOS_URL;

const InstanceTAOS = Axios.create({
    baseURL: urlBase,
});

InstanceTAOS.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        const access_token = JSON.parse(window.localStorage.getItem("token"));
        config.headers = {
            Authorization: `Bearer ${access_token}`,
            accept: "application/json",
        };
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

InstanceTAOS.interceptors.response.use(
    function(response) {
        // Do something before request is sent
        return response;
    },
    function(error) {
        // Do something with request error
        if (error.response.status == 401) {
            window.localStorage.removeItem("access_token");
            window.localStorage.removeItem("usuario");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default InstanceTAOS;
