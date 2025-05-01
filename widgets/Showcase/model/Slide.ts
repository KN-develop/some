type VideoType = {
  oid: string,
  versions: {
    oid: string,
    age: number,
    playback_url: string,
    duration: string,
  }[],
  url: string,
};

export type SlideType = {
  oid: string,
  title: {
    oid: string,
    title: string,
    synopsis: string,
    age: number,
    genres: string[],
    labels: string[],
    assets: {
      oid: string,
      asset_type: string,
      resize_url: string,
    }[],
    url: string,
    air_date: string,
    end_date: string | null,
  },
  trailer: VideoType | null,
  preview: VideoType | null,
  live_banner: VideoType | null,
};
