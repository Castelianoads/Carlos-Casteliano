import type Contact from "@/domain/models/Contact";

export default interface IContactRepository {
  SendContactEmailAsync(contact: Contact): Promise<boolean>;  
}