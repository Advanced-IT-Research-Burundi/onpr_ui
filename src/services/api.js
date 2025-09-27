import authService from './authService.js';
import httpClient from './httpClient.js';
import tokenManager from './tokenManager.js';


class ApiService {
  constructor() {

    this.auth = authService;
    this.http = httpClient;
    this.token = tokenManager;
  }
  

  
  async request(endpoint, options = {}) { return this.http.request(endpoint, options); }
  async post(endpoint, data) { return this.http.post(endpoint, data); }
  async put(endpoint, data) { return this.http.put(endpoint, data); }
  async patch(endpoint, data) { return this.http.patch(endpoint, data); }
  async delete(endpoint) { return this.http.delete(endpoint); }
  async get(endpoint, params = {}) { return this.http.get(endpoint, params); }


  async login(credentials) { return this.auth.login(credentials); }
  async logout() { return this.auth.logout(); }


  async getCurrentUser() { return this.auth.getCurrentUser(); }
  async refreshToken() { return this.auth.refreshToken(); }
  async verifyToken() { return this.auth.verifyToken(); }

  setToken(token) { return this.token.setToken(token); }
  clearToken() { return this.token.clearToken(); }
  isAuthenticated() { return this.token.isAuthenticated(); }
  getToken() { return this.token.getToken(); }

}

export default new ApiService();