import type IContactRepository from "../lib/domain/interfaces/IContactRepository";
import type Contact from "../lib/domain/models/Contact";


const urlEndpontContactApi = 'https://carloscasteliano.com.br:5000/Api/v1/Contato';

class ContactRepository implements IContactRepository {
  
  async SendContactEmailAsync(contact: Contact): Promise<boolean> {
    try {
      const response = await fetch(urlEndpontContactApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(contact),
      });

      return response.ok; 
    } catch (error) {
      console.error('Erro ao enviar contato.');
      return false;
    }
  }  
}

export default ContactRepository;