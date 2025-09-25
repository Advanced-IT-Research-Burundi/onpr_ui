import { useEffect } from "react"
import ApiService from "../services/api.js"
import { API_CONFIG } from "../config/config.js";
import Sidebar from "../layouts/SiderBar.jsx";
import { useDispatch } from 'react-redux';
import { setLocaleAction } from "../store/actions/appActions";
import { useIntl } from "react-intl";



const HomeScreen = () => {

    const dispatch = useDispatch();

    const intl = useIntl();

    useEffect(() => {
        fetchPosts();
    }, [])
     async function fetchPosts() {
        const response = await ApiService.get(API_CONFIG.ENDPOINTS.GET_ALL_POSTS);
        console.log(response);
    }
    const handleLocaleChange = (e, locale) => {
        e.preventDefault();
        dispatch(setLocaleAction(locale));
      };
  return (
    <div>
      
      <button className="btn btn-primary" onClick={() => handleLocaleChange(event, 'fr')}>Français</button>
      <button className="btn btn-primary" onClick={() => handleLocaleChange(event, 'en')}>English</button>
      <div>
        <h1>{intl.formatMessage({ id: 'hello' })}</h1>
      </div>
    </div>
    )
}

export default HomeScreen
