import satori from "satori";
import sharp from "sharp";
import fs from "fs";

export const generateOgp = async (
  options: { title: string; url: string }[]
) => {
  for (const option of options) {
    const png = await generateOgpImage(option.title);
    fs.writeFileSync(`public/images${option.url}.png`, png);
  }
};

const generateOgpImage = async (title: string) => {
  // フォントデータを読み込む
  const font = fs.readFileSync("public/fonts/NotoSansJP-Regular.otf");
  // JSX から画像を生成する
  const svg = await satori(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#282b2f",
        color: "#fff",
        justifyContent: "space-between",
        fontSize: 48,
        fontWeight: 600,
        padding: "1rem 2rem",
      }}
    >
      <p style={{ fontSize: 64 }}>{title}</p>

      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://avatars.githubusercontent.com/wattanx"
          width={48}
          height={48}
          style={{ borderRadius: "100%" }}
        />
        <p style={{ marginLeft: "16px" }}>wattanx</p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans JP",
          data: font,
          style: "normal",
        },
      ],
    }
  );

  // SVG から PNG 形式に変換する
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return png;
};
