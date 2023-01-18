import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import fetch, { Response } from "node-fetch";
import { createCanvas, loadImage, Image } from "canvas";
import QRCode from "qrcode";
//背景图片
const BG_URL =
  "https://mp-58baf90f-31bb-444b-8730-fac0c723b4f1.cdn.bspapp.com/cloudstorage/7f84ae45-0392-4939-92d0-a98043060493.jpg";
const TITLE =
  " 新年氛围，手拿红灯笼的少女，插画，古风，唯美，高清 ,漫画风，二次元，风景 ";
const SHARE_URL = `https://baidu.com/share`;
const LOGO =
  "https://mp-58baf90f-31bb-444b-8730-fac0c723b4f1.cdn.bspapp.com/cloudstorage/1c9660be-e865-4f62-953b-0d37e8718641.png";
const WIDTH = 750;
const HEIGHT = 910;
const BOTTOM_HEIGHT = 120;
const BOTTOM_PADDING = 10;
const LOGO_SIZE = 18;
const LOGO_TITLE = "AI绘画小程序";
const LOGO_TIPS = "- AI艺术和创意平台 - ";
const AUTHOUR = `- by 随风而逝 -`;
const QRCODE_IMG_SIZE = 80;
const INFO_HEIGHT = 100;
const handler = nc<NextApiRequest, NextApiResponse>();
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("get method req.query", req.query, typeof req.query);
  const { contents } = req.query;

  //先生成qrcode
  try {
    //进行海报的绘制功能 如果在客户端生成其实很慢还有兼容性问题他
    const canvas = createCanvas(WIDTH, HEIGHT);
    const ctx = canvas.getContext("2d");
    //基础背景黑色
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    //生成背景

    const bgImg = await loadImage(BG_URL);

    ctx.drawImage(bgImg, 0, 0, WIDTH, HEIGHT - BOTTOM_HEIGHT);

    //fill tips
    ctx.fillStyle = "rgba(0,0,0,.8)";
    ctx.fillRect(0, HEIGHT - INFO_HEIGHT - BOTTOM_HEIGHT, WIDTH, INFO_HEIGHT);

    writeTextOnCanvas(
      ctx,
      30,
      50,
      `" ${TITLE} "`,
      20,
      HEIGHT - INFO_HEIGHT / 2 - BOTTOM_HEIGHT - 20,
      "#FFFFFF",
      "bold 20px Impact",
      1
    );
    //写入作者是谁
    ctx.font = "bold 14px Impact";
    ctx.fillStyle = "#999";
    ctx.textAlign = "center";
    ctx.fillText(AUTHOUR, WIDTH / 2, HEIGHT - BOTTOM_HEIGHT - 15, WIDTH - 40);
    //logo
    const logoImg = await loadImage(LOGO);
    ctx.drawImage(
      logoImg,
      BOTTOM_PADDING,
      HEIGHT - BOTTOM_HEIGHT + BOTTOM_HEIGHT / 2 - LOGO_SIZE / 2,
      LOGO_SIZE,
      LOGO_SIZE
    );

    // logo title and tips
    ctx.textAlign = "left";
    ctx.font = "18px Impact";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(
      LOGO_TITLE,
      BOTTOM_PADDING + LOGO_SIZE + 5,
      HEIGHT - BOTTOM_HEIGHT + BOTTOM_HEIGHT / 2 + 7
    );

    ctx.font = "14px Impact";
    ctx.fillStyle = "#ffffff";

    ctx.fillText(
      LOGO_TIPS,
      BOTTOM_PADDING,
      HEIGHT - BOTTOM_HEIGHT + BOTTOM_HEIGHT / 2 + 30
    );

    const qrcode = await QRCode.toDataURL(SHARE_URL, {
      version: 2,
      width: QRCODE_IMG_SIZE,
      rendererOpts: {
        quality: 1,
      },
    });
    console.log(qrcode); //base64
    const qrcodeImg = new Image();
    qrcodeImg.src = qrcode;
    qrcodeImg.width = QRCODE_IMG_SIZE;
    qrcodeImg.height = QRCODE_IMG_SIZE;
    ctx.drawImage(
      qrcodeImg,
      WIDTH - BOTTOM_PADDING - QRCODE_IMG_SIZE,
      HEIGHT - QRCODE_IMG_SIZE - 20,
      QRCODE_IMG_SIZE,
      QRCODE_IMG_SIZE
    );
    const buffer = canvas.toBuffer();
    res.setHeader("Content-Type", "image/jpg");
    res.send(buffer);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});
export default handler;

function writeTextOnCanvas(
  ctx_2d: any,
  lineheight: any,
  bytelength: any,
  text: any,
  startleft: any,
  starttop: any,
  ctx_fillStyle: any,
  ctx_font: any,
  istrue: any
) {
  function getTrueLength(str: string) {
    //获取字符串的真实长度（字节长度）
    var len = str.length,
      truelen = 0;
    for (var x = 0; x < len; x++) {
      if (str.charCodeAt(x) > 128) {
        truelen += 2;
      } else {
        truelen += 1;
      }
    }
    return truelen;
  }
  function cutString(str: string, leng: number) {
    //按字节长度截取字符串，返回substr截取位置
    var len = str.length,
      tlen = len,
      nlen = 0;
    for (var x = 0; x < len; x++) {
      if (str.charCodeAt(x) > 128) {
        if (nlen + 2 < leng) {
          nlen += 2;
        } else {
          tlen = x;
          break;
        }
      } else {
        if (nlen + 1 < leng) {
          nlen += 1;
        } else {
          tlen = x;
          break;
        }
      }
    }
    return tlen;
  }
  if (text.length < 17 && istrue == 1) {
    ctx_2d.textAlign = "center";
  } else {
    if (istrue == 1) {
      ctx_2d.textAlign = "";
      startleft = 130;
    }
  }
  for (var i = 1; getTrueLength(text) > 0; i++) {
    var tl = cutString(text, bytelength);
    ctx_2d.fillStyle = ctx_fillStyle; //字体颜色
    ctx_2d.font = ctx_font; //字体
    ctx_2d.fillText(
      text.substr(0, tl).replace(/^\s+|\s+$/, ""),
      startleft,
      (i - 1) * lineheight + starttop
    );

    text = text.substr(tl);
  }
}
