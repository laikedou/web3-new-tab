// 用于上传的公共组件支持 单文件以及批量上传后期还会支持解析xlsx文件进行上传

type Props = {};

import ThirdWebProvider from "./provider";
import Upload from "./upload";
const UploadCom: React.FC<Props> = (props: Props) => {
  return (
    <ThirdWebProvider>
      <Upload />
    </ThirdWebProvider>
  );
};

export default UploadCom;
