

export default interface IMusicRepository {
  DownloadMusicAsync(link: String): Promise<boolean>;
  DownloadMusicsAsync(links: String[]): Promise<boolean>;
}