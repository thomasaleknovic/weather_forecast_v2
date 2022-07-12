
const API_KEY = 'ade4a8f4fc3245439e0103530221404';
const API_BASE = 'https://api.weatherapi.com/v1';

export function GET_FORECAST (location: string) {

    return {
        URL:  `${API_BASE}/forecast.json?key=${API_KEY}&lang=pt&q=${location}&days=7&alerts=yes`
    }

}

export function GET_LOCATION() {
    
    return {
        URL: `${API_BASE}/ip.json?key=${API_KEY}&q=auto:ip`
    }
}



