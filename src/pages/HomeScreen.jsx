import { useEffect } from "react"
import ApiService from "../services/api.js"
import { API_CONFIG } from "../config/config.js";


const HomeScreen = () => {

    useEffect(() => {
        fetchPosts();
    }, [])
     async function fetchPosts() {
        const response = await ApiService.get(API_CONFIG.ENDPOINTS.GET_ALL_POSTS);
        console.log(response);
    }
  return (
    <div>
      <h1>Home Screen</h1>
    </div>
  )
}

export default HomeScreen
