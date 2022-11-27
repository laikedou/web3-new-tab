import { DiskStorageOptions, FileFilterCallback } from "multer";
import { createReadStream } from "fs";
import { Request } from "express";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
function getDestination(
  res: Request,
  file: Express.Multer.File,
  callback: (error: Error | null, destination: string) => void
): void {
  callback(null, "/dev/null");
}
class MyCustomStorage {
  getDestination: any;
  constructor(opts: DiskStorageOptions) {
    this.getDestination = opts.destination || getDestination;
  }
  public _handleFile(
    req: Request,
    file: Express.Multer.File,
    callback: (error?: any, info?: Partial<Express.Multer.File>) => void
  ) {
    console.log(file);
    return;
    this.getDestination(req, file, async function (error: Error, path: string) {
      if (error) {
        callback(error);
      }
      const readStream = createReadStream(file.originalname);
      console.log("path:..", readStream.bytesRead);

      return;
      const storage = new ThirdwebStorage();
      const uri = await storage.upload(file);
      // This will log a URL like ipfs://QmWgbcjKWCXhaLzMz4gNBxQpAHktQK6MkLvBkKXbsoWEEy/0
      console.log(uri);
      // Here we a URL with a gateway that we can look at in the browser
      const data = await storage.downloadJSON(uri);
      console.log(data);
      callback(null, {
        path,
        size: readStream.bytesRead,
      });
    });
  }
  public _removeFile() {
    // nothing to do we upload the file to the IPFS can't remove
  }
}

export function myCustomStorage(opts: DiskStorageOptions) {
  return new MyCustomStorage(opts);
}
