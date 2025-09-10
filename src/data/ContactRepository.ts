import { AxiosConfig } from "@/settings/AxiosConfig";
import type IContactRepository from "../domain/interfaces/IContactRepository";
import type Contact from "../domain/models/Contact";

const urlEndpointContact = `/Api/v1/Contact`;

class ContactRepository implements IContactRepository {
  
  async SendContactEmailAsync(contact: Contact): Promise<boolean> {
    const response = await AxiosConfig.post(urlEndpointContact, contact);
    return response.status == 200 || response.data.status == 200 ? true : false;
        
    // try {
    //   const response = await fetch(urlEndpontContact, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(contact),
    //   });

    //   return response.ok; 
    // } catch (error) {
    //   console.error('Erro ao enviar contato.');
    //   return false;
    // }
  }  
}

export default ContactRepository;