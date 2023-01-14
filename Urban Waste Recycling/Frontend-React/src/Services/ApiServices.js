import axios from "axios";
const BASE_URL = "http://localhost:8585/product";
const EWASTE_URL = "http://localhost:8585/product/byCategory/E-Waste";
const GREENWASTE_URL = "http://localhost:8585/product/byCategory/Green Waste";
const DOMESTICWASTE_URL =
  "http://localhost:8585/product/byCategory/Domestic waste";
const DEBRIS_URL = "http://localhost:8585/product/byCategory/Debris";
const LOGIN_URL = "http://localhost:8585/user/login";
const DELETE_URL = "http://localhost:8585/product/delete";
const UPDATE_URL = "http://localhost:8585/product/update";
const ADMINLOGIN_URL = "http://localhost:8585/admin/login";
const FEEDBACK_URL = "http://localhost:8585/feedback/add";
const FEEDBACKGET_URL = "http://localhost:8585/feedback";
//--------- save products----------
export async function addProduct(add) {
  return axios.post(BASE_URL, add);
}

//--------- get all productss----------
export async function getAllProductsFromServer() {
  return axios.get(BASE_URL);
}
//--------- get E Waste productss----------
export async function getEWasteProductsFromServer() {
  return axios.get(EWASTE_URL);
}
//--------- get Green Waste productss----------
export async function getGreenWasteProductsFromServer() {
  return axios.get(GREENWASTE_URL);
}
//--------- get Domestic Waste productss----------
export async function getDomWasteProductsFromServer() {
  return axios.get(DOMESTICWASTE_URL);
}
//--------- get Debris productss----------
export async function getDebrisProductsFromServer() {
  return axios.get(DEBRIS_URL);
}

//--------- delete product----------
export function deleteProductFromServer(id) {
  return axios.delete(`${DELETE_URL}/${id}`);
}
//--------- edit product----------
export function editProductFromServer(product) {
  return axios.put(`${UPDATE_URL}/${product}`);
}
//--------- user login details ----------
export async function getLoginDetailsFromServer(formValues) {
  return axios.post(LOGIN_URL, formValues);
}
//--------- admin login details  ----------
export async function getAdminLoginDetailsFromServer(formValues) {
  return axios.post(ADMINLOGIN_URL, formValues);
}
//--------- save feedback  ----------
export async function saveFeedback(add) {
  return axios.post(FEEDBACK_URL, add);
}
//--------- get feedback  ----------
export async function getFeedbackfromserver() {
  return axios.get(FEEDBACKGET_URL);
}
