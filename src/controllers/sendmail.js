import axios from "axios";
const url = "https://carlosparra-back.vercel.app/api/send/"

export default async function sendMail(payload) {
    try {
        const { status } = await axios.post(url, payload)
        if (status === 200) {
            return true
        }
    }
    catch (error) {
        return false
    }

}