import { AxiosWithAuth } from './AxiosWithAuth';

export const fetchBubbles = () => {
    return AxiosWithAuth()
            .get('/api/colors')
            .then(res => {return res;})
};