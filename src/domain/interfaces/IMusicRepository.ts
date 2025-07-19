

export default interface IMusicRepository {
  DownloadMusicAsync(links: String[]): Promise<boolean>;  
}