import axios from "axios";

export const checkStatus = async (links) => {
    try {
        const videoStatus = await axios.get(links.check_status_url);
        if(videoStatus.data.status === "ERROR")
            throw 'error'
        if (videoStatus.data.status !== "VIDEO_AVAILABLE" ) {
            return new Promise((res) => {
                setTimeout(() => res(checkStatus(links)), 10000);
            })
        }
    } catch (error) {
        console.log(error)
    }
};

export const buildPlayerOptions= ( options,src)=> ({ ...options,src })
