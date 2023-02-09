import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer hE3CqWIspVPIJ-Rd8RHWtZ_wBu9zb6KDTxHM1CmFLziZSRVXO3yLROsyyDybMdlIUwDWAG5CwRdgPzsnxhcFQmEQ9app-F1ZKvOXWxGwooSauPUIKRz45rQncczkY3Yx'
    }
});
