import authService from './authService.js';
import httpClient from './httpClient.js';


class ApiService {
  constructor() {

    this.auth = authService;
    this.http = httpClient;
  }
  

  async login(credentials) { return this.auth.login(credentials); }
  async logout() { return this.auth.logout(); }
  async request(endpoint, options = {}) { return this.http.request(endpoint, options); }
  async post(endpoint, data) { return this.http.post(endpoint, data); }
  async put(endpoint, data) { return this.http.put(endpoint, data); }
  async patch(endpoint, data) { return this.http.patch(endpoint, data); }
  async delete(endpoint) { return this.http.delete(endpoint); }
  async get(endpoint, params = {}) { return this.http.get(endpoint, params); }

}

export default new ApiService();