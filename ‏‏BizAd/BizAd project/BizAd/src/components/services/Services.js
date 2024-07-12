import { useState } from "react";
import ServicesHeader from "./ServicesHeader";
import Message from "./Message";
import ServicesTable from "./ServicesTable";

function Services() {
    
    const [ServicesData, setServicesData] = useState([]);

    
    function addService(newService) {
        newService.id = Math.random() + '';
        
        const updated = [...ServicesData, newService];
        setServicesData(updated);
    }

    function deleteService(Service) {
        const updated = ServicesData.filter(ServiceItem => ServiceItem.id !== Service.id);
        setServicesData(updated);
    }

    return (
        <>
            <ServicesHeader addService={addService} />
            {  ServicesData.length === 0 && <Message /> }
            <ServicesTable Services={ServicesData} deleteService={deleteService} />
        </>
    );
}

export default Services;