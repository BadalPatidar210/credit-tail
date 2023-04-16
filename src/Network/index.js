import axios from "axios";
import { BASE_URL } from "./api.constant";
import { CUSTOMERS_LIST } from "./api.endpoints";

export const getCustomersList = async (params) => {
    return new Promise(async (resolve, reject) => {
        const url = BASE_URL + CUSTOMERS_LIST;
        axios.get(url, {
          params: params,
        })
          .then((res) => {
            console.log("response",res.data)
            res.data && resolve(res.data);
          })
          .catch((error) => {
            error && resolve(error.response);
          });
    });
}
  

export const getCustomer = (params) => {
    return new Promise(async (resolve, reject) => {
        const url = BASE_URL + GET_CUSTOMER;
        axios.get(url, params)
          .then((res) => {
            res && resolve(res);
          })
          .catch((error) => {
            error && resolve(error.response);
          });
    });
}

export const confirmPayment = (params) => {
    return new Promise(async (resolve, reject) => {
        const url = BASE_URL + PAY_CUSTOMER;
        axios.post(url, params)
          .then((res) => {
            res && resolve(res);
          })
          .catch((error) => {
            error && resolve(error.response);
          });
    });
}