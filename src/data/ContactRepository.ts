import type IContactRepository from "../domain/interfaces/IContactRepository";
import type Contact from "../domain/models/Contact";


const urlEndpontContact = 'https://carloscasteliano.com.br:5000/Api/v1/Contato';

class ContactRepository implements IContactRepository {
  
  async SendContactEmailAsync(contact: Contact): Promise<boolean> {
    try {
      const response = await fetch(urlEndpontContact, {
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