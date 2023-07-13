import axios from "axios";
import { useEffect, useState } from "react"

const useServiceDetail = serviceId => {
    const [service, setService] = useState([]);
    useEffect(() => {
        const getServiceDetail = () => {
            const url = ` http://localhost:5000/service/${serviceId}`;
            axios.get(url)
                .then(response => {
                    setService(response.data)
                })
        }
        getServiceDetail()
    }, [serviceId])

    return [service]
}

export default useServiceDetail;