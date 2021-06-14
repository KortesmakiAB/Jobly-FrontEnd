import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interacting with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /* {name: searchTerms } => {handle, name, description, numEmployees, logoUrl} */
  static async getOrSearchAllCompanies(formData) {
    let res = await this.request(`companies`, formData);
    return res.companies;
  }

  /* {handle} => {handle, name, description, numEmployees, logoUrl, jobs:[{id, title, salary, equity}]} */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /* {title: searchTerms} => {id, title, salary, equity, companyHandle, companyName} */
  static async getOrSearchAllJobs(formData) {
    let res = await this.request(`jobs`, formData);
    return res.jobs;
  }
  
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser(username, formData) {
    const method = 'PATCH';
    let res = await this.request(`users/${username}`, formData, method);
    return res.user;
  }

  static async signUp(formData) {
    const method = 'POST';
    let res = await this.request(`auth/register`, formData, method);
    return res.token;
  }

  static async signIn(unPw) {
    const method = 'POST';
    let res = await this.request(`auth/token`, unPw, method);
    return res.token;
  }

  // {username, password} => true/false
  static async validate(unPw) {
    return await this.request('auth/validate', unPw);
  }  

}


export default JoblyApi;