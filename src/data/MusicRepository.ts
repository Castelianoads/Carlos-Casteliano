import type IMusicRepository from "@/domain/interfaces/IMusicRepository";
import axios from "axios";

const urlEndpontMusic = 'https://carloscasteliano.com.br:8000/';

class MusicRepository implements IMusicRepository {  
  async DownloadMusicAsync(links: String[]): Promise<boolean> {
    try {
      if (links.length === 1) {
        const response = await axios.post(
          urlEndpontMusic + 'baixar', 
          { url: links[0] },
          { responseType: 'blob' }
        )
        const blob = new Blob([response.data], { type: 'audio/mpeg' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url

        const disposition = response.headers['content-disposition'];
        let filename = 'musica.mp3';
        if (disposition && disposition.includes('filename=')) {
          const match = disposition.match(/filename="?(.+?)"?$/);
          if (match) filename = match[1];
        }
        a.download = filename;
                
        a.click()
        URL.revokeObjectURL(url)
      } else {
        const response = await axios.post(
          urlEndpontMusic + 'baixarVarios',
          { urls: links },
          { responseType: 'blob' }
        )
        const blob = new Blob([response.data], { type: 'application/zip' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'musicas.zip'
        a.click()
        URL.revokeObjectURL(url)
      }
      return true;
    } catch (err) {
      return false;
    } 
  }

}

export default MusicRepository;