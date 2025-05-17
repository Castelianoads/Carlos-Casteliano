import type Contact from "@/lib/domain/models/Contact";

export default interface IContactRepository {
  SendContactEmailAsync(contact: Contact): Promise<boolean>;  
}