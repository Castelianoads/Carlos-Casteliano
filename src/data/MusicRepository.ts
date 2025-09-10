import type IMusicRepository from "@/domain/interfaces/IMusicRepository";
import { AxiosConfig } from "@/settings/AxiosConfig";

const urlServer = 'http://localhost:8080';
//const urlServer = 'https://carloscasteliano.com.br:5000';

class MusicRepository implements IMusicRepository {  
  async DownloadMusicAsync(link: String): Promise<boolean> {
    console.log("Entrou DownloadMusicAsync");
    try {
      const response = await AxiosConfig.post(
        urlServer,
        { url: link },
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
      console.log(filename);

      a.click()
      URL.revokeObjectURL(url)
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async DownloadMusicsAsync(links: String[]): Promise<boolean> {
    try {
      const response = await AxiosConfig.post(
        urlServer + '/lista',
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
      return true;
    } catch (err) {
      return false;
    } 
  }

}

export default MusicRepository;