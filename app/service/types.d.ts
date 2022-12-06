type CreatorCardProps = {
  currency: string;
  rank: number;
  creatorImage: string;
  creatorName: string;
  creatorEths: number;
  owner?: string;
  seller?: string;
  key?: string;
};
type StorageFile = {
  cid: string;
  metadataGatewayURL: string;
  imageGatewayURL: string;
  imageURI: string;
  metadataURI: string;
};
type NftsProps = {
  i: string;
  price: number;
  image: string;
  name: string;
  owner: string;
  seller: string;
  currency: string;
};

type ResponseData<T> = {
  success: boolean;
  data: T[];
};
